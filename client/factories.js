var app = angular.module('myApp.factories', []);

app.factory('Chirper', ['$resource', function($resource){
    return $resource('/api/chirps/:id', {id: '@id'});
}])

app.factory('UpdateChirper', ['$resource', function($resource){
    return $resource('/api/chirps/update');
}])

app.factory('Chirps', ['$resource', function($resource){
    return $resource('/api/users/:id', {id: '@id'});
}]);