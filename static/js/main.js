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
        /*.when('/modeling', {
            templateUrl : 'views/modeling.html',
            controller : 'modelingController'
        })*/
        .when('/personalProjects', {
            templateUrl : 'views/personalProj.html',
            controller : 'personalProjController'
        })
        .when('/fx', {
            templateUrl : 'views/fx.html',
            controller : 'fxController'
        })
        .when('/scripting', {
            templateUrl : 'views/scripting.html',
            controller : 'scriptingController'
        })
        .when('/other', {
            templateUrl : 'views/other.html',
            controller : 'otherController'
        })
        .otherwise({redirectTo: '/'});
});