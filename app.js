angular.module('lessonlace', ['ngRoute', 'infinite-scroll'])
    .controller("infiniteScrollController", infiniteScrollController)
    .controller("authenticate", authenticate)
    .factory('userFact', userFactory);

infiniteScrollController.$inject=["userFact"];

angular.module('lessonlace')
    .config(myRouter);

    myRouter.$inject = ['$routeProvider']
 
    function myRouter($routeProvider) {
        $routeProvider
        
        .when("/app_content", {
            templateUrl: "/templates/app_content.html"
            
        })
        .when("/signin", {
            templateUrl: "/templates/signin.html"
        })
        .when("/app_content",{
            templateUrl: "/templates/app_content.html"
        })
        .otherwise({
            redirectTo: '/'
        })
    }

/**
* Check if current user has authorized this application.
*/
function handleAuthClick() {
  console.log('here we are at Auth!');
gapi.auth.authorize(
  {
    'client_id': CLIENT_ID,
    'scope': SCOPES.join(' '),
    'immediate': true
  }, aCtrl.handleAuthResult);
};

/**
*Used with Handle AuthClick to verify user session **/
function authenticate(){
    var aCtrl = this;
    console.log('Testing Auth');
      var CLIENT_ID = '553892757728-cev6cf803s6efjl7rgfsnp5tsrknuram.apps.googleusercontent.com';

      var SCOPES = ["https://www.googleapis.com/auth/classroom.courses.readonly", "https://www.googleapis.com/auth/classroom.coursework.students","https://www.googleapis.com/auth/classroom.profile.photos","https://www.googleapis.com/auth/classroom.profile.emails"];

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      aCtrl.handleAuthResult = function(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // If Authenticated load client library.
            console.log('Auth is Working');
            aCtrl.loadClassroomApi();
        } else {
          // If user is not authenticated, redirect user to signup page.
            console.log('Not Authenticated');
            authorizeDiv.style.display = 'none';
            window.location.href = '/#';
        }
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
    aCtrl.listCourses = function() {
        console.log('It is hitting listCourses')
        var request = gapi.client.classroom.courses.list({
          pageSize: 10
        });
      }
    
    aCtrl.onSignIn = function(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    }
}

function infiniteScrollController(userFact){
    var scroll = this;
    console.log('Feeding to Inifinite Scroll!');
    
    scroll.getData = userFact.getData;
    
//    scroll.data =  scroll.courses.slice(0, 30);
//    scroll.getMoreData = function () {
//    scroll.data =  scroll.courses.slice(0,  scroll.data.length + 30);
//}
};

function userFactory($http){
    console.log("hitting Factory");
    return{
       getData: function(){
            return $http.get("https://classroom.googleapis.com/v1/courses/?key=AIzaSyCXHTtrF9QPuxU7IV22G8THnP7k9-AoUJU")
        }
    }
};



