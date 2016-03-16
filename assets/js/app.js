
// (function () {

    var myModule = angular.module('apptApp', ['ngRoute']);

    apptApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'index.html',
                controller  : 'MainController'
            })

            // route for the about page
            .when('/create', {
                templateUrl : 'create.html'
                // controller  : 'aboutController'
            })

            // route for the contact page
            .when('/confirm', {
                templateUrl : 'confirm.html'
                // controller  : 'contactController'
            });

             apptApp.controller('MainController', function($scope) {
                $scope.message = 'Hello world!';
            });
    });

// })();
