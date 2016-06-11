angular.module('portfolio')
    .directive('project', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: '/app/components/home/projects/project.html'
    }
});