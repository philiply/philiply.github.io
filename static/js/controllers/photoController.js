mainApp.controller('photoController', function($scope) {
    $scope.pictureList = ['bee', 'bigFlower', 'bubbles', 'cuteSpider', 'campanile', 'deadBee', 'droplet', 'lionHead', 'flowerBug', 'happyBeeFan', 'heavyArmsCustom', 'littleBuds', 'cannonMacro', 'squirrelHug', 'turtle'];
    
    $scope.enlargePhoto = function(event, target) {
        event.stopPropagation();
        var real_width, real_height;
        var $overlayImg = $('#globalOverlay #overlayImage > img');
        var $overlayImgDiv = $('#globalOverlay #overlayImage');
        $overlayImg.attr('src', 'static/image/photography/full/' +
                                                       $(target).parent().data('image') + '.jpg')
            .off("load").load(function() {
            $overlayImgDiv.removeClass('vertical-photo');
            real_width = this.width;
            real_height = this.height;
            if (real_width < real_height) {
                $overlayImgDiv.addClass('vertical-photo')
            }
            $('#globalOverlay').fadeIn(300, function() {
            });
        });
        
    };
    
    $('#globalOverlay #overlayContainer').click(function() {
        $('#globalOverlay').fadeOut();
    });
    
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('#globalOverlay').fadeOut();
        }
    });
});

mainApp.directive('galleryLoaded', function() {
    return function(scope, element, attrs) {
        if (scope.$last) {
            console.log(scope.$last);
            $('#galleryContainer').masonry({
                gutter: 10,
                itemSelector: '.galleryItem',
            });
            setTimeout(function() {
                $('#galleryContainer').data('masonry').layout();
            }, 500);
        }
        
    }
});