mainApp.controller('photoController', function($scope) {
    $scope.pictureList = ['bee', 'bigFlower', 'bubbles', 'cuteSpider', 'campanile', 'deadBee', 'droplet', 'lionHead', 'flowerBug', 'happyBeeFan', 'heavyArmsCustom', 'littleBuds', 'cannonMacro', 'squirrelHug', 'turtle'];
    $scope.selectedPic = "";
    $scope.enlargePhoto = function(event, target) {
        event.stopPropagation();
        var real_width, real_height;
        var $overlayImg = $('#globalOverlay #overlayImage > img');
        var $overlayImgDiv = $('#globalOverlay #overlayImage');
        var $overlayLoadingGif = $('#globalOverlay .loading-gif');
        $overlayImgDiv.hide();
        $overlayLoadingGif.show();

        if ($(target).data("image") == $scope.selectedPic) {
            revealPhoto($overlayImg.width(), $overlayImg.height());
        }
        
        $('#globalOverlay').fadeIn(300);
        $overlayImg.attr('src', 'static/image/photography/full/' +
                                                       $(target).parent().data('image') + '.jpg')
        .off("load").load(function() {
            revealPhoto(this.width, this.height);
            $scope.selectedPic = $(target).data("image");
        });
        
    };
    
    function revealPhoto(realWidth, realHeight) {
        var $overlayImgDiv = $('#globalOverlay #overlayImage');
        var $overlayLoadingGif = $('#globalOverlay .loading-gif');
        $overlayImgDiv.removeClass('vertical-photo');
        if (realWidth < realHeight) {
            $overlayImgDiv.addClass('vertical-photo')
        }
        $overlayLoadingGif.fadeOut("fast", function() {
            $overlayImgDiv.fadeIn();
        });
    }
    
    $('#globalOverlay #overlayContainer').click(function() {
        $('#globalOverlay').fadeOut();
    });
    
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('#globalOverlay').fadeOut();
        }
    });
});

mainApp.directive('galleryDone', function() {
    return function(scope, element, attrs) {
        $(window).load(function() {
            $('#galleryContainer').masonry({
                gutter: 10,
                itemSelector: '.galleryItem',
            });
            setTimeout(function() {
                $('#galleryContainer').data('masonry').layout();
            }, 250);
            
        });
    }
});

mainApp.directive('galleryLoaded', function() {
    return function(scope, element, attrs) {
        if (scope.$last) {
            
            /*setTimeout(function() {
                $('#galleryContainer').data('masonry').layout();
            }, 500);*/
        }
        
    }
});