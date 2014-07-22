var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller : 'homeController'
        })
        .when('/about', {
            templateUrl : 'views/about.html',
            controller : 'aboutController'
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

mainApp.controller('homeController', function($scope) {
    
});

mainApp.controller('aboutController', function($scope) {
    $scope.updatePicture = function(target) {
        $('#mainSelfPhoto').removeClass('selfPhoto1').removeClass('selfPhoto2').removeClass('selfPhoto3')
        .addClass('selfPhoto'+$(target).data('photo'));
    };
});

mainApp.controller('contactController', function($scope) {
    
});

mainApp.controller('photoController', function($scope) {
    var container = document.querySelector('#galleryContainer');
    var msnry = new Masonry(container, {
        gutter: 10,
        itemSelector: '.item',
    });
    setTimeout(function() {
        msnry.layout();
    }, 150);
    
    $('#galleryContainer .item').click(function() {
        $(this).toggleClass('focus-pic');
        if ($(this).hasClass('focus-pic')) {
            $(window).scrollTop($(this).offset().top);
            
        }
        msnry.layout();
    });
    
});