var app = angular.module('myApp.controllers', []);

app.controller('SingleChirpController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams){
    var chirpId = $routeParams.id;
    console.log(chirpId);

    getSingleTweet();

    function getSingleTweet(){
        $http({
            url: ('/api/users/' + chirpId),
            method: 'GET'
        }).then(function(response){
            console.log("response " + response.data[0]);
            $scope.chirps = response.data[0];
        }, console.log('error'));
    }

    $scope.UpdateChirp = function updateTweet(){
        updatechirp = {
            id: chirpId,
            message: $('#message').val()
        }    
        $http({
            url: ('/api/chirps/update'),
            method: 'POST',
            data: updatechirp
        }).then(function(response){
            getSingleTweet();
        }, console.log('error'));
    };

    $scope.DeleteChirp = function deleteTweet(){
        deleteChirp = {id: chirpId};
        console.log(deleteChirp);
        $http({
            url: ('/api/users/' + chirpId),
            method: 'DELETE',
        }).then(function(response){
            console.log(response.data)
            $location.path('/list');
        }, console.log('error'));
    };

}]);


app.controller('ChirpsController', ['$scope', '$http', function($scope, $http){

    getTweets();
    getUsers();

    function getTweets(){
        console.log('getTweets start')
        $http({
            url: '/api/chirps',
            method: 'GET'
        }).then(function(response) {
            $scope.chirps = response.data[0];    
        }, console.log('error'));
    };

    $scope.postChirps = function(){
        var chirps = {
            userId: $('#userOption').val(),
            message: $('#message').val(),
         };
         $http({
            url: '/api/chirps',
            method: 'POST',
            data: chirps
        }).then(function(response) {
             getTweets();
        }, console.log('error'));
    };

    function getUsers(){
        $('#userOptions').empty();
        $http({
            url: '/api/users',
            method: 'GET',
        }).then(function(response){
            $scope.username = response.data[0];
        }, console.log('error'));
    };

    $scope.createUsers = function(){
        var user = {userName: $('#username').val()};
        $http({
            url: '/api/users',
            method: 'POST',
            data: user
        }).then(function(response){
            getUsers();
        }, console.log('error'))
    };

    $scope.singleChirp = function(){

    }


}]);