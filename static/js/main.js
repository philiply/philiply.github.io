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

mainApp.controller('homeController', function($scope) {
    $scope.updatePicture = function(target) {
        $('#mainSelfPhoto').removeClass('selfPhoto1').removeClass('selfPhoto2').removeClass('selfPhoto3')
        .addClass('selfPhoto'+$(target).data('photo'));
    };
});

mainApp.controller('contactController', function($scope) {
    
});

mainApp.controller('photoController', function($scope) {
    $scope.pictureList = ['bee', 'bigFlower', 'bubbles', 'cuteSpider', 'deadBee', 'droplet', 'flowerBug', 'happyBeeFan', 'heavyArmsCustom', 'littleBuds', 'squirrelHug', 'turtle'];
    
    $('#galleryContainer .item').click(function() {
        $(this).toggleClass('focus-pic');
        if ($(this).hasClass('focus-pic')) {
            $(window).scrollTop($(this).offset().top + $(this).height());
            
        }
        $('#galleryContainer').data('masonry').layout();
    });
    
});

mainApp.directive('galleryLoaded', function() {
    return function(scope, element, attrs) {
        if (scope.$last) {
            $('#galleryContainer').masonry({
                gutter: 10,
                itemSelector: '.item',
            });
        }
        setTimeout(function() {
            $('#galleryContainer').data('masonry').layout();
        }, 150);
    }
});