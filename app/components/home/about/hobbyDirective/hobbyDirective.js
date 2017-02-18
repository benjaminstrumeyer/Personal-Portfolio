app.directive('hobbyDirective', function() {
   return {
       restrict: 'E',
       templateUrl: 'app/components/home/about/hobbyDirective/hobby.html',
       controller: 'hobbyController',
       controllerAs: '$ctrl',
       scope: {
           x: '=',
           y: '='
       },
       link: function(scope, elem, attr) {
           
            //Use the css function to pass the x and y coordinates. 
           var myEl = angular.element(elem[0].querySelector('.circle'));
           var widthOffset = myEl.prop('offsetHeight')/2;
           var heightOffset = myEl.prop('offsetWidth')/2;
           
           var xPosition = scope.x - widthOffset;
           var yPosition = scope.y - heightOffset;
           
           console.log('x, y: ', xPosition, yPosition);n b
           
           myEl.css({
                'top': xPosition + 'px',
                'left': yPosition + 'px'
           });
       }
   } 
});