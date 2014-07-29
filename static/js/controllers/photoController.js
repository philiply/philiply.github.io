mainApp.controller('photoController', function($scope) {
    $scope.pictureList = ['bee', 'bigFlower', 'bubbles', 'cuteSpider', 'campanile', 'deadBee', 'droplet', 'flowerBug', 'happyBeeFan', 'heavyArmsCustom', 'littleBuds', 'squirrelHug', 'turtle'];
    
    $scope.enlargePhoto = function(event, target) {
        event.stopPropagation();
        var $overlayImg = $('#globalOverlay #overlayImage > img');
        var $overlayImgDiv = $('#globalOverlay #overlayImage');
        $overlayImg.attr('src', 'static/image/photography/full/' +
                                                       $(target).parent().data('image') + '.jpg');
        $('#globalOverlay').fadeIn({start: function() {
            $overlayImg.removeClass('verticalPhoto');
            $overlayImg.height('auto');
            
            
        }});
        
        $('#globalOverlay').fadeIn(300, function() {
            if ($overlayImgDiv.width() < $overlayImgDiv.height()) { //vertical photo
                console.log('vertical photo');
                $overlayImg.addClass('verticalPhoto');
                $overlayImg.height(window.innerHeight - 40);
            }
            $('#overlayImage').css("marginTop", (window.innerHeight - $('#overlayImage > img').height())/2);
        });
        //$(target).parent().data('image');
        //$(target).parent().toggleClass('focus-pic');
        //$('#galleryContainer').data('masonry').layout();
        
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
            $('#galleryContainer').masonry({
                gutter: 10,
                itemSelector: '.galleryItem',
            });
            setTimeout(function() {
                $('#galleryContainer').data('masonry').layout();
            }, 150);
        }
        
    }
});