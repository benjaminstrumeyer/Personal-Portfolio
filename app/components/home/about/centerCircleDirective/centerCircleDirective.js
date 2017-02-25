app
    .directive('centerCircleDirective', function() {
        return {
            restrict: 'E',
            scope: {
                currentHobby: '='
            },
            templateUrl: 'app/components/home/about/centerCircleDirective/centerCircle.html',
            controller: 'centerCircleController'
        }
});