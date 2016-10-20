angular.module('lessonlace', ['ngRoute', 'infinite-scroll'])
    .controller("infiniteScrollController", infiniteScrollController)
    .controller("authenticate", authenticate)
    .factory('userFact', userFactory);

infiniteScrollController.$inject=["userFact"];
authenticate.$inject=['$scope'];

angular.module('lessonlace')
    .config(myRouter);

    myRouter.$inject = ['$routeProvider']
 
    function myRouter($routeProvider) {
        $routeProvider
        
        .when("/", {
            templateUrl: "/templates/app_content.html"
        })
        .when("/signin", {
            templateUrl: "/templates/signin.html"
        })
        .when("/app_content",{
            templateUrl: "/templates/app_content.html"
        })
        .when("/quickstart",{
             templateUrl:
             "/quickstart.html"})
        .otherwise({
            redirectTo: '/'
        })
        
    }

  

/**
*Used with Handle AuthClick to verify user session **/
function authenticate($scope){
    var aCtrl = this;
    window.aCtrl = aCtrl;
    console.log('Testing Auth');
      var CLIENT_ID = '553892757728-cev6cf803s6efjl7rgfsnp5tsrknuram.apps.googleusercontent.com';

      var SCOPES = ["https://www.googleapis.com/auth/classroom.courses.readonly", "https://www.googleapis.com/auth/classroom.coursework.students", "https://www.googleapis.com/auth/classroom.profile.photos", "https://www.googleapis.com/auth/classroom.profile.emails"];

   
/**
       * Check if current user has authorized this application.
       */
      aCtrl.checkAuth = function() {
        console.log("Calling checkAuth")
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, aCtrl.handleAuthResult);
          
          console.log("Called checkAuth")
      }

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
    //aCtrl.handleAuthClick();
      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      aCtrl.handleAuthResult = function(authResult) {
          
          console.log("Calling handleAuthResult")
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
        gapi.client.load('classroom', 'v1', aCtrl.listCourses)
//        gapi.client.load('classroom', 'v1', aCtrl.listProfile);  
      }
      
      /**
       * Pushes user out of the app if user is not authenticated.
       */      
      aCtrl.handleAuthClick = function(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          aCtrl.handleAuthResult);
        return false;
      }
    
      /**
       * Prints Courses - the names of the first 10 courses the user has access to. If
       * no courses are found an appropriate message is printed.
       */
      
    aCtrl.loading = true;
    aCtrl.listCourses = function() {
        console.log('It is hitting listCourses')
        var request = gapi.client.classroom.courses.list({
          pageSize: 10
        })
         request.execute(function(resp) {
            aCtrl.loading = false;
            aCtrl.courses = resp.courses;
            $scope.$apply();
      })
     }     
     
      /**
       * Prints Photos - the names of the first 10 courses the user has access to. If
       * no courses are found an appropriate message is printed.
       */
//    aCtrl.listProfile = function() {
//        console.log('It is hitting listProfile')
//        
//        var listProfile = gapi.client.load('classroom', 'v1', function(){
//            var userEmail = gapi.client.classroom.userProfiles.get({
//            userId: 'me'
//        })
//        .then(function(resp) {
//          aCtrl.courses = resp.userProfiles;
//             console.log('Retrieved profile for:' + resp.displayName);
//             $scope.$apply();
//            })
//        })     
//    }
}


function infiniteScrollController(userFact){
    var scroll = this;
    
    console.log('Feeding to Inifinite Scroll!');

    scroll.getData = userFact.getData;
};

function userFactory($http){
    console.log("hitting Factory");
    return{
       getData: function(){
           return $http.get("https://classroom.googleapis.com/v1/courses/?key=AIzaSyCXHTtrF9QPuxU7IV22G8THnP7k9-AoUJU");
//           return $http.get( "https://classroom.googleapis.com/v1/userProfiles/?key=AIzaSyCXHTtrF9QPuxU7IV22G8THnP7k9-AoUJU")
        }
    }
};


