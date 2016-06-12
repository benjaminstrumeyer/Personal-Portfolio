angular.module('portfolio')
    .directive('project', function () {
        return {
            restrict: 'E',
            scope: false,
            transclude: true,
            templateUrl: '/app/components/home/projects/project.html'
    }
});