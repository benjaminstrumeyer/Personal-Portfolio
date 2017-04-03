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
                scope.checkWidth = $('.center-circle-container').prop('offsetWidth'); 
                
                var smallestEdge = Math.min(scope.checkHeight/1.38, scope.checkWidth/1.38);
                scope.radius = Math.max(285, smallestEdge);
            }
            
            // Update main circle size here
            var updateCenterCircle = function() {
//                var aboutSectionHeight = $('#about').prop('offsetHeight'); 
                var windowWidth = $(window).width();
                var windowHeight = $(window).height();
                
                var smallestEdge = Math.min(windowWidth, windowHeight);
                
                var adjustedWidth = smallestEdge < 800 ? 800 : smallestEdge;
                $('.center-circle-container').css({
                   'padding': adjustedWidth/4 + 'px'
                });
                
            }
            
            updateCenterCircle();
            
            
            
            //Call it on page load
            checkSize();
            
            // Update radius values for responsive design
            $interval(checkSize, 500);
            $interval(updateCenterCircle, 500);
            
            scope.$watch(function() {
                return scope.currentHobbyImgSrc;
            },
            function(newVal, oldVal) {
                var myEl = angular.element(elem[0].querySelector('#circle-background-container'));

                myEl.css({
                    'background-image': 'url(\'/' + newVal + '\')'
                });
               
            });
            
            //Easter Egg
            console.log("It's a hobby 'circle' because I'm well rounded!");
        }
    }
});