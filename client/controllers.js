var app = angular.module('myApp.controllers', []);

app.controller('SingleChirpController', ['$scope', 'Chirper', 'Chirps', 'UpdateChirper', '$location', '$routeParams', function ($scope, Chirper, Chirps, UpdateChirper, $location, $routeParams){
    var chirpId = $routeParams.id;
    getOne();

    function getOne(){
        $scope.chirp = Chirps.get({id: chirpId}, function(success){
            console.log('working');
        }, function(err){
            console.log('error');
        });
    };   
    
    $scope.DeleteChirp = function(){
        $scope.chirp.$delete(function(){
            $location.path('/list');
        }, function(err) {
            console.log("error");
        })
    };

    $scope.UpdateChirp = function(){
        var c = new UpdateChirper({
            id: chirpId,            
            message: $scope.newMessage
        });
        c.$save(function(success){
            $('.class').empty();
            getOne();
        }, function(error){
            $scope.newMessage = '';
        });
    };

    $scope.Return = function(){
        $location.path('/list');
    }
}]);

app.controller('ChirpsController', ['$scope', '$location', 'Chirper', 'Chirps', function($scope, $location, Chirper, Chirps){
    $scope.chirps = Chirper.query();
    $scope.username = Chirps.query();

    $scope.postChirps = function(){
        var c = new Chirper({
            userId: $('#userOption').val(),            
            message: $scope.newMessage
        });
        c.$save(function(success){
            console.log('success')
        }, function(error){
            $('.class').empty();
            $scope.chirps = Chirper.query();
            $scope.newMessage = '';
        });
    };

    $scope.MakeUser = function(){
        $location.path('/');
    };
}]);

app.controller('WelcomeController', ['$scope', '$location', 'Chirps', function($scope, $location, Chirps){
    $scope.createUsers = function(){
        var u = new Chirps({
            userName: $scope.newUsername
        })
        u.$save(function(success){
            $scope.newUsername = '';
        }, function(error){
            console.log('error');
        });
    }

    $scope.ListLink = function() {
        $location.path('/list');
    };
}]);