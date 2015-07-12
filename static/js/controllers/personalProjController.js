mainApp.controller('personalProjController', function($scope) {
    
});

mainApp.controller('3dProjectController', function($scope, $location) {
    $scope.projectData = [
        {name: 'Pixalizer',
         imgName: 'dragonpixelcompare.jpg',
         id: 'pixelizer'},
        {name: 'Fireworks System',
         imgName: 'fireworksThumbnail.png',
         id: 'fireworksSystem'},
    ];
    
    $scope.revealText = function(e) {
        $(e.target).parent().siblings('.project3d-text').velocity({marginBottom:0}, 300);
    };
    
    $scope.hideText = function(e) {
        $(e.target).parent().siblings('.project3d-text').velocity({marginBottom:'-40px'}, 300);
    };
    
    $scope.goToProject = function(id) {
        $location.path('3dprojects/'+id);
    };
});

mainApp.controller('3dProjectDetailsController', function($scope, $routeParams) {
    $scope.projectName = $routeParams.projectName;
    
    $scope.partialUrl = 'views/3dProjectPartials/' + $scope.projectName + '.html';
});