angular.module('lessonlace', ['ngRoute', 'infinite-scroll'])
    .controller("Signin", Signin)
    .controller("Signup", Signup) .controller("infiniteScrollController", infiniteScrollController)
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

function infiniteScrollController($scope, $http){
    $scope.users =
    [{
            "id": 1,
            "first_name": "Kimberly",
            "last_name": "Grant",
            "email": "kgrant0@ebay.co.uk",
            "country": "Bolivia",
            "ip_address": "93.77.148.179"
        }, {
            "id": 2,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 3,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 4,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 5,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 6,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 7,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 8,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 9,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 10,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 11,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 12,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 13,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 14,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 15,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 16,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 17,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 18,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 19,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 20,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 21,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 22,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 23,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 24,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 25,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 26,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 27,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 28,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 29,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 30,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 1,
            "first_name": "Kimberly",
            "last_name": "Grant",
            "email": "kgrant0@ebay.co.uk",
            "country": "Bolivia",
            "ip_address": "93.77.148.179"
        }, {
            "id": 2,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 3,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 4,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 5,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 6,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 7,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 8,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 9,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 10,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 11,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 12,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 13,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 14,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 15,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 16,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 17,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 18,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 19,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 20,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 21,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 22,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 23,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 24,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 25,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 26,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 27,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 28,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 29,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }, {
            "id": 30,
            "first_name": "Elizabeth",
            "last_name": "Lewis",
            "email": "elewis1@so-net.ne.jp",
            "country": "Indonesia",
            "ip_address": "39.187.159.25"
        }];
     $scope.data =  $scope.users.slice(0, 30);
     $scope.getMoreData = function () {
     $scope.data =  $scope.users.slice(0,  $scope.data.length + 30);
}
};

