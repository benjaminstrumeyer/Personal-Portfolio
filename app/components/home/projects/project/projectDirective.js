angular.module('portfolio')
    .directive('project', function () {
        return {
            restrict: 'E',
            scope: false,
            transclude: true,
            templateUrl: '/app/components/home/projects/project/project.html',
            link: function(scope, elem, attrs) {
//                var technologies = scope.technologies;
                console.log(scope.projects);
            }
    }
});