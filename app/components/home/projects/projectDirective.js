angular.module('portfolio')
    .directive('project', function () {
        return {
            restrict: 'E',
            transclude: true,
            template: '<h2>Test</h2>'
    }
});