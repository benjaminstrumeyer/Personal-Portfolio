app.directive('hobbyDirective', function() {
   return {
       restrict: 'E',
       templateUrl: 'app/components/home/about/hobbyDirective/hobby.html',
       controller: 'app/components/home/about/hobbyDirective/hobbyController.js',
       controllerAs: '$ctrl',
       scope: {
           x: '=',
           y: '='
       },
       link: function(scope, elem, attr) {
           //Use the css function to pass the x and y coordinates. 
       }
   } 
});