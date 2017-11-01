// all routing here
var app = angular.module('myApp', ['ngRoute', 'myApp.controllers']);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html'
    })
    .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ChirpsController'
    })
    .when('/single_view/:id', {
        templateUrl: 'views/single_view.html',
        controller: 'SingleChirpController'
    })
    .when('/single_update/: id', {
        templateUrl: 'views/single_update.html',
        controller: 'UpdateChirpController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
