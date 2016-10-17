angular.module('lessonlace', ['ngroute'])
    .controller('GoogleSignin', googleSignin);

angular.module('lessonlace')
    .config(myRouter);

myRouter.$inject = ['$routeProvider'];

function myRouter($routeProvider){
    console.log('route is working!');
    $routeProvider
        .when('/app', {
            templateUrl: '/templates/app.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}

function googleSignin(){
    
var oCtrl = this;
    oCtrl.greeting = "Origins";

    <!--Google Signin & button -->
//      var googleUser = {};
//      var startApp = function() {
//        gapi.load('auth2', function(){
//          // Retrieve the singleton for the GoogleAuth library and set up the client.
//          auth2 = gapi.auth2.init({
//            client_id: '553892757728-cev6cf803s6efjl7rgfsnp5tsrknuram.apps.googleusercontent.com',
//            cookiepolicy: 'http://localhost:8080',
//            // Request scopes in addition to 'profile' and 'email'
//            //scope: 'additional_scope'
//          });
//          attachSignin(document.getElementById('signupBtn'));
//        });
//      };
//
//      function attachSignin(element) {
//        console.log(element.id);
//        auth2.attachClickHandler(element, {},
//            function(googleUser) {
//              document.getElementById('name').innerText = "Signed in: " +
//                  googleUser.getBasicProfile().getName();
//            }, function(error) {
//              alert(JSON.stringify(error, undefined, 2));
//            });
//      
//        startApp();
//      };
//    // auth2 is initialized with gapi.auth2.init() and a user is signed in.
//    function signedin(){
//        if (auth2.isSignedIn.get()) {
//            var profile = auth2.currentUser.get().getBasicProfile();
//            console.log('ID: ' + profile.getId());
//            console.log('Full Name: ' + profile.getName());
//            console.log('Given Name: ' + profile.getGivenName());
//            console.log('Family Name: ' + profile.getFamilyName());
//            console.log('Image URL: ' + profile.getImageUrl());
//            console.log('Email: ' + profile.getEmail());
//        }else{
//            console.log('Not logged in');
//        };
//    };
};
