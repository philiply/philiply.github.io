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
        .when('/projects', {     
            templateUrl : 'views/projects.html',
            controller : 'personalProjController'
        })
        .when('/3dprojects', {
            templateUrl: 'views/inconstruction.html',
            controller: 'inConstructionController'
            /*
            templateUrl: 'views/3dProjects.html',
            controller: '3dProjectController'
            */
        })
        .when('/other', {
            templateUrl : 'views/other.html',
            controller : 'otherController'
        })
        .when('/blog', {
            templateUrl: 'views/inconstruction.html',
            controller: 'inConstructionController'
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