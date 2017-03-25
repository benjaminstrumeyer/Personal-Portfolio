app
    .controller("ProjectController", function ($scope, $http) {
    
    var self = this;
    
    $scope.scrollTop = function() {
        $('html, body').scrollTop($('#projects').position().top);  
    }
    
    });