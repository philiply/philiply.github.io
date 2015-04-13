mainApp.controller("InitCtrl", function($scope) {
     $scope.toggleMenu = function() {
        $('#navMenu').slideToggle();
    };
});

mainApp.controller('homeController', function($scope) {
    $scope.slideCounter = 0;
    $scope.slideCount = 4;
    
    $scope.slideshowLoop = function() {
        updateSlide();
        setTimeout(function() {
            $scope.slideshowLoop();
        }, 5000);    
    };
    
    $scope.init = function() {
         setTimeout(function() {
            $('.slideshow').removeClass('narrow');
            $('.name-text-container').animate({opacity: 1.0}, 4000);
        }, 250);
    };
    
    function updateSlide() {
        for (var i = 0; i < $scope.slideCount; i++){
            $('.slideshow').removeClass('slide' + i);
        }
        $scope.slideCounter++;
        if ($scope.slideCounter < $scope.slideCount) {
            $('.slideshow').addClass('slide'+$scope.slideCounter);
        } else {
            $('.slideshow').addClass('slide0');
            $scope.slideCounter = 0;
        }
    }
    
});

mainApp.controller('contactController', function($scope) {
    
    $scope.updatePicture = function(target) {
        $('#mainSelfPhoto').removeClass('selfPhoto1 selfPhoto2 selfPhoto3')
        .addClass('selfPhoto'+$(target).data('photo'));
    };
    
});

mainApp.controller('inConstructionController', function($scope) {
    
});