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
            var myEl = angular.element(elem[0].querySelector('.circle'));
            var widthOffset = myEl.prop('offsetHeight')/2;
            var heightOffset = myEl.prop('offsetWidth')/2;
           
           console.log('heightOffset', heightOffset);
           
           console.log('YVals: ', scope.y);
           
            var setRadius = function() {
                var xPosition = scope.x - widthOffset;
                var yPosition = scope.y - heightOffset;
//                console.log('xPos: ', xPosition);
//                console.log('yPos: ', yPosition);

                myEl.css({
                    'top': xPosition + 'px',
                    'left': yPosition + 'px'
                });
           } 
           
           $interval(setRadius, 1000);

//           scope.$watchGroup([scope.x, scope.y], 
//                function(newVals, oldVals) {
//                    var xPosition = newVals[0] - widthOffset;
//                    var yPosition = newVals[1] - heightOffset;
//                
//
//                    myEl.css({
//                        'top': xPosition + 'px',
//                        'left': yPosition + 'px'
//                    });
//                });
           
//            var xPosition = scope.x - widthOffset;
//            var yPosition = scope.y - heightOffset;
//
//            console.log('x, y: ', xPosition, yPosition);
//
//            myEl.css({
//                'top': xPosition + 'px',
//                'left': yPosition + 'px'
//            });
           
           //Put the hobby object on the scope
           scope.hobby = hobbyService.hobbies[scope.index];
       }
   } 
});