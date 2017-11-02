// all routing here
var app = angular.module('myApp', ['ngRoute', 'ngResource', 'myApp.controllers', 'myApp.factories']);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
    .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ChirpsController'
    })
    .when('/single_view/:id', {
        templateUrl: 'views/single_view.html',
        controller: 'SingleChirpController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
