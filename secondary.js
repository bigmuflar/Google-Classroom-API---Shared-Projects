angular.module('lessonlace', ['ngRoute'])
    .controller("MainController", MainController)
    .controller("RedController", RedController)
    .controller("GreenController", GreenController)
    .controller("BlueController", BlueController)

angular.module('lessonlace')
    .config(myRouter);

    myRouter.$inject = ['$routeProvider']
 
    function myRouter($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "/templates/home.html"
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
            redirectTo: '/'
        })
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

//
//function googleSignin(){
//    console.log('test works!')
//    var cCtrl = this;
//    
//    cCtrl.greeting = "Testing this greeting using a bind.";
//    
//    
//};