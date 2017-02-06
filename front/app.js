'use strict';

let routeApp = angular.module('routeApp', [
    'ngRoute',
    'routeAppControllers'
]);

routeApp.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/default/homes.html',
                controller: 'index'
            })
            .otherwise({
                redirectTo: '/user'
            });
    }
]);

let routeAppControllers = angular.module('routeAppControllers', []);

routeAppControllers.controller('index', ['$scope', '$http',
    function($scope , $http){

        console.log("test 1");

        $http({
            method: 'GET',
            url: 'http://localhost:8000/'
        }).then(function successCallback(response) {
            console.log(response);
            // if (response.data.length > 0) {
            //     $scope.message = response.data[0];
            // }
        });
    }
]);