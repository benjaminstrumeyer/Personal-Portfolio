angular.module('portfolio')
    .directive('projectInfo', function() {
        return {
            restrict: 'E',
            scope: false,
            transclude: true,
            templateUrl: '/app/components/home/projects/projectInfo/projectInfo.html',
            link: function(scope, elem, attrs) {
                console.log(scope.projects);
        }
    };
});