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
                scope.checkHeight = $('.center-circle-container').prop('offsetHeight'); 
                
                scope.radius = scope.checkHeight/1.38;
            }
            
            //Call it on page load
            checkSize();
            
            // Update radius values for responsive design
            $interval(checkSize, 1000);
            
            scope.$watch(function() {
                return scope.currentHobbyImgSrc;
            },
            function(newVal, oldVal) {
                var myEl = angular.element(elem[0].querySelector('#circle-background-container'));

                myEl.css({
                    'background-image': 'url(\'/' + newVal + '\')'
                });
               
            });
        }
    }
});