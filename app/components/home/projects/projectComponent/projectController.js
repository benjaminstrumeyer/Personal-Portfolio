app
    .controller("ProjectController", function ($scope, $http) {
    
    var self = this;
    
//    self.projectInfo = true;
    
    $scope.scrollTop = function() {
        $('html, body').scrollTop($('#projects').position().top);  
    }
    
    });