app.directive('hobbyDirective', function() {
   return {
       restrict: 'E',
       templateUrl: 'app/components/home/about/hobbyDirective/hobby.html',
       controller: 'app/components/home/about/hobbyDirective/hobbyController.js',
       controllerAs: '$ctrl'
   } 
});