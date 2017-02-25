app.directive('hobbyCircleDirective', function($interval) {
    return {
        restrict: 'E',
        scope: {
            hobbies: '='
        },
        templateUrl: 'app/components/home/about/hobbyCircleDirective/hobbyCircle.html',
        controller: 'hobbyCircleController',
        controllerAs: 'hobbyCircle',
        link: function(scope, elem, attr) {
            
            var checkSize = function() {
                scope.checkWidth = $('.hobby-circle-parent-container').width();
                scope.checkHeight = $('.hobby-circle-parent-container').height();
                
                scope.radius = Math.min(scope.checkWidth/2.3, scope.checkHeight/2.3);
            }
            
            //Call it on page load
            checkSize();
            
            // Update radius values for responsive design
            $interval(checkSize, 1000);
        }
    }
});