mainApp.controller('homeController', function($scope) {
    $scope.updatePicture = function(target) {
        $('#mainSelfPhoto').removeClass('selfPhoto1').removeClass('selfPhoto2').removeClass('selfPhoto3')
        .addClass('selfPhoto'+$(target).data('photo'));
    };
});

mainApp.controller('contactController', function($scope) {
    
});