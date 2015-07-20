mainApp.controller("InitCtrl", function($scope) {
  $scope.getMenuIcon = function() {
    var xhr =  new XMLHttpRequest();
    xhr.open("GET", "static/image/menu.svg", false);
    xhr.overrideMimeType("image/svg+xml");
    xhr.send("");
    document.getElementById("menuIconContainer")
      .appendChild(xhr.responseXML.documentElement);
  };

     $scope.toggleMenu = function() {
        $('#navMenu').slideToggle();
    };
    $scope.revealMenu = function() {
      if($('header .navbar').hasClass('reveal')) {
        $scope.hideMenu();
      } else {
        $('header .navbar').addClass('reveal');

        $('footer').velocity({
          marginBottom: "0"
        });
      }

    };

    $scope.hideMenu = function() {
      $('header .navbar').removeClass('reveal');

      $('footer').velocity({
        marginBottom: "-26px"
      });
    };
});

mainApp.controller('homeController', function($scope) {
    $scope.slideCounter = 0;
    $scope.slideCount = 4;
    $scope.slides = [0, 1, 2, 3];
    $scope.slideOrder = {0:0, 1:-1, 2:-2, 3:-3};
    $scope.initialized = false;

    $scope.slideshowLoop = function() {
      console.log($scope.slideOrder);
      console.log(slideshowLoopID);
      clearTimeout(slideshowLoopID);

      slideshowLoopID = setTimeout(function() {
          for (var i in $scope.slides) {
            if ($scope.slideOrder[i]===0) {
              $('.slide'+i).fadeOut(2000, function() {
                updateSlide();
                $(this).show();
              });
            }
          }
          $scope.slideshowLoop();
      }, 10000);
    };

    $scope.init = function() {
          setTimeout(function() {
             $( '.slideshow').removeClass('narrow');
             $('slideshow').velocity({minHeight: 630}, 0, "swing");
             $('.name-text-container').animate({opacity: 1.0}, 4000);
        }, 250);
    };

    $('.slideshow').fadeIn();

    angular.element(document).ready(function() {
      $(window).load(function() {
        $('.slideshow').fadeIn();
        for (var i in $scope.slides) {
          $('.slide'+i).css('z-index', $scope.slideOrder[i]);
        }
        $scope.initialized = true;
      });
    });

    function updateSlide() {
      for (var i in $scope.slides) {
        $scope.slideOrder[i] += 1;
        if ($scope.slideOrder[i] > 0) {
            $scope.slideOrder[i] -= $scope.slides.length;
        }
        $('.slide'+i).css('z-index', $scope.slideOrder[i]);
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
    $scope.initAnimation = function() {

    };
});
