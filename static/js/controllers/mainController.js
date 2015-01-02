mainApp.controller('homeController', function($scope) {
    var slides = {
        1:'honeycombMacro4.jpg',
        2:'droppedPokeballs.jpg'
    }
});

mainApp.controller('contactController', function($scope) {
    $scope.updatePicture = function(target) {
        $('#mainSelfPhoto').removeClass('selfPhoto1').removeClass('selfPhoto2').removeClass('selfPhoto3')
        .addClass('selfPhoto'+$(target).data('photo'));
    };
});