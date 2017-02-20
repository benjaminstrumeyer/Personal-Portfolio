app.directive('hobbyCircleDirective', function() {
    return {
        restrict: 'E',
        scope: {
            hobbies: '='
        },
        templateUrl: 'app/components/home/about/hobbyCircleDirective/hobbyCircle.html',
        controller: 'hobbyCircleController',
        controllerAs: '$ctrl',
        link: function(scope, elem, attr) {
        }
    }
});