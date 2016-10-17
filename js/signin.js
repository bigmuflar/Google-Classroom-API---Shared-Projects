angular.module('lessonlace', [])
    .controller('GoogleSignin', googleSignin);

googleSignin.$inject = ['$http'];


//googleSignin.$inject = ['$routeProvider'];

//function myRouter($routeProvider){
//    $routeProvider
//        .when('/',{
//            templateURL: '/index.html'
//        })
//        .when('/signin', {
//            templateUrl: '/templates/signin.html'
//        })
//}

function googleSignin(){
    
var oCtrl = this;
    oCtrl.greeting = "Origins";
      var googleUser = {};
      var startApp = function() {
        gapi.load('auth2', function(){
          // Retrieve the singleton for the GoogleAuth library and set up the client.
          auth2 = gapi.auth2.init({
            client_id: '553892757728-cev6cf803s6efjl7rgfsnp5tsrknuram.apps.googleusercontent.com',
            cookiepolicy: 'http://localhost:8080',
            // Request scopes in addition to 'profile' and 'email'
            //scope: 'additional_scope'
          });
          attachSignin(document.getElementById('signupBtn'));
        });
      };

      function attachSignin(element) {
        console.log(element.id);
        auth2.attachClickHandler(element, {},
            function(googleUser) {
              document.getElementById('name').innerText = "Signed in: " +
                  googleUser.getBasicProfile().getName();
            }, function(error) {
              alert(JSON.stringify(error, undefined, 2));
            });
      
        startApp();
      };
};