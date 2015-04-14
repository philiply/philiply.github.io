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
            /*   
            templateUrl : 'views/personalProj.html',
            controller : 'personalProjController'
            */
            templateUrl : 'views/inconstruction.html',
            controller : 'inConstructionController'
        })
        .when('/fx', {
            /*
            templateUrl : 'views/fx.html',
            controller : 'fxController'
            */
            templateUrl : 'views/inconstruction.html',
            controller : 'inConstructionController'
        })
        .when('/scripting', {
            /*
            templateUrl : 'views/scripting.html',
            controller : 'scriptingController'
            */
            templateUrl : 'views/inconstruction.html',
            controller : 'inConstructionController'
        })
        .when('/other', {
            templateUrl : 'views/other.html',
            controller : 'otherController'
            /*
            templateUrl : 'views/inconstruction.html',
            controller : 'inConstructionController'
            */
        })
        .otherwise({redirectTo: '/'});
});

$(document).ready(function() {
    
    window.onresize = function() {
        if (window.innerWidth > 768) {
            $('.navbar-nav').fadeIn();
        } else {
            $('.navbar-nav').hide();
        }
    }
});

//Twitter badge function
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');