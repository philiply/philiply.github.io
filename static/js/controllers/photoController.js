mainApp.controller('photoController', function($scope) {
    $scope.pictureList = ['bee', 'geeselings', 'bigFlower', 'bubbles', 'cuteSpider', 'campanile', 'deadBee', 'droplet', 'lionHead', 'flowerBug', 'happyBeeFan', 'heavyArmsCustom', 'snowOnLeaves', 'littleBuds', 'cannonMacro', 'squirrelHug', 'turtle'];
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
    
    $scope.popout = function(target) {
        $(target).velocity({translateZ: 20}, {easing: "spring"});
    };
    
    $scope.popback = function(target) {
        $(target).velocity({translateZ: 0}, {easing: "spring"});
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

mainApp.directive('galleryLoaded', function() {
    return function(scope, element, attrs) {
        if (scope.$last) {
            $('#galleryContainer').masonry({
                gutter: 10,
                itemSelector: '.gallery-item',
            });
        }
    }
});

var photoLoadCount = 0;

mainApp.directive('imageLoaded', function() {
    return function(scope, element, attrs) {
        $(element).load(function() {
            photoLoadCount += 1;
            
            if (photoLoadCount === scope.pictureList.length) {
                $('#galleryContainer').data('masonry').layout();
                photoLoadCount = 0;
            }
        });
    }
});