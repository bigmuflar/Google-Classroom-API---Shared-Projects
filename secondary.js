angular.module('lessonlace', ['ngRoute', 'infinite-scroll'])
    .controller("Signin", Signin)
    .controller("Signup", Signup)
    
   .controller("authenticate", authenticate) .controller("infiniteScrollController", infiniteScrollController)
    .controller("MainController", MainController)
    .controller("RedController", RedController)
    .controller("GreenController", GreenController)
    .controller("BlueController", BlueController)
    .factory('userFact', userFactory);

infiniteScrollController.$inject=["userFact"];

angular.module('lessonlace')
    .config(myRouter);

    myRouter.$inject = ['$routeProvider']
 
    function myRouter($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "/templates/signup.html"
        })
        .when("/signin", {
            templateUrl: "/templates/signin.html"
        })
        .when("/app_content",{
            templateUrl: "/templates/app_content.html"
        })
        .when("/red", {
            templateUrl : "/templates/red.html"
        })
        .when("/green", {
            templateUrl : "/templates/green.html"
        })
        .when("/blue", {
            templateUrl : "/templates/blue.html"
        })
        .otherwise({
            redirectTo: '/templates/signup.html'
        })
    }

function authenticate(){
    var aCtrl = this;
    console.log('Testing Auth');
      var CLIENT_ID = '553892757728-cev6cf803s6efjl7rgfsnp5tsrknuram.apps.googleusercontent.com';

      var SCOPES = ["https://www.googleapis.com/auth/classroom.courses.readonly", "https://www.googleapis.com/auth/classroom.coursework.students","https://www.googleapis.com/auth/classroom.profile.photos","https://www.googleapis.com/auth/classroom.profile.emails"];

      /**
       * Check if current user has authorized this application.
       */
      aCtrl.handleAuthClick = function(event) {
        console.log('here we are!');
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, aCtrl.handleAuthResult);
      };

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      aCtrl.handleAuthResult = function(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          aCtrl.loadClassroomApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      }

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      aCtrl.handleAuthClick = function(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          aCtrl.handleAuthResult);
        return false;
      }

      /**
       * Load Classroom API client library.
       */
      aCtrl.loadClassroomApi = function() {
        gapi.client.load('classroom', 'v1', listCourses);
      }

      /**
       * Print the names of the first 10 courses the user has access to. If
       * no courses are found an appropriate message is printed.
       */
      function listCourses() {
          console.log('It is hitting listCouses')
        var request = gapi.client.classroom.courses.list({
          pageSize: 10
        });

        request.execute(function(resp) {
          var courses = resp.courses;
          appendPre('Courses:');

          if (courses.length > 0) {
            for (i = 0; i < courses.length; i++) {
              var course = courses[i];
              appendPre(course.name)
            }
          } else {
            appendPre('No courses found.');
          }

        });
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      appendPre = function(message) {
          console.log('It is hitting appendPre');
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
}

function Signin() {
    var SigninCtrl = this;
    SigninCtrl.greeting = 'Welcome to the view!';
 }

function Signup() {
    var SignupCtrl = this;
    SignupCtrl.greeting = 'Welcome to the view!';
 }

function MainController() {
    var mCtrl = this;
    mCtrl.greeting = 'Welcome to the view!';
 }

function MainController() {
    var mCtrl = this;
    mCtrl.greeting = 'Welcome to the view!';
 }

function RedController(){
    var rCtrl = this;
    rCtrl.greeting = 'This is the Red Control';
 }

 function GreenController(){
     var gCtrl = this;
     gCtrl.greeting = 'This is the Green Control';
 }

 function BlueController(){
     var bCtrl = this;
     bCtrl.greeting = 'This is the Blue Control';
 }

function infiniteScrollController(userFact){
    var scroll = this;
    console.log('hello!');
    
    scroll.courses = userFact.courses;
    
//    scroll.data =  scroll.courses.slice(0, 30);
//    scroll.getMoreData = function () {
//    scroll.data =  scroll.courses.slice(0,  scroll.data.length + 30);
//}
};

function userFactory($http){
    console.log("hitting Factory")
    $http.get('https://prod-day0-classroom.sandbox.googleapis.com/v1/courses/?key=AIzaSyCXHTtrF9QPuxU7IV22G8THnP7k9-AoUJU')
    .then(function(res, status){
        console.log("Success:", res);
    }, function(res, status){
        console.log("Failure:", status);
    });
}
