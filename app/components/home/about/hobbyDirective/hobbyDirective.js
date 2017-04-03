app.directive('hobbyDirective', function(hobbyService, $rootScope, $interval) {
   return {
       restrict: 'E',
       templateUrl: 'app/components/home/about/hobbyDirective/hobby.html',
       controller: 'hobbyController',
       controllerAs: '$ctrl',
       scope: {
           x: '=',
           y: '=', 
           index: "="
       },
       link: function(scope, elem, attr) {
           
            //Use the css function to pass the x and y coordinates. 
                var myEl = angular.element(elem[0].querySelector('.circle-wrapper'));
                var widthOffset = myEl.prop('offsetHeight')/2; 
                var heightOffset = myEl.prop('offsetWidth')/2;
           
            var setRadius = function() {
                
                var xPosition = scope.x - widthOffset;
                var yPosition = scope.y - heightOffset;

                myEl.css({
                    'top': xPosition + 'px',
                    'left': yPosition + 'px'
                });
           }
           
            var resetIndividualCircleSize = function() {
                var windowHeight = $(window).height();
                var windowWidth = $(window).width();   
                
                
                //Adjust Padding
                var smallestEdge = Math.min(windowHeight, windowWidth);
                if (smallestEdge < 900) {
                    console.log('Smallest edge is: ', smallestEdge);
                    $('.circle-wrapper .circle').css({
                       'padding':  'calc(70px + 3.5%) calc(70px + 3.5%)',
                        'margin-left': '-2%'
                    });
                    
                    // Adjust offset due to changed padding
                    
                }
                else {
                    $('.circle-wrapper .circle').css({
                       'padding': 'calc(75px + 3.5%) calc(75px + 3.5%)',
//                       'margin-left': '-5%'
                    });
                }
            }
           
           $interval(setRadius, 500);
           $interval(resetIndividualCircleSize, 500);
           
           //Put the hobby object on the scope
           scope.hobby = hobbyService.hobbies[scope.index];
       }
   } 
});