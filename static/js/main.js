var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller : 'homeController'
        })
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller : 'contactController'
        })
        .when('/photo', {
            templateUrl : 'views/photo.html',
            controller: 'photoController' 
        })
        .otherwise({redirectTo: '/'});
});