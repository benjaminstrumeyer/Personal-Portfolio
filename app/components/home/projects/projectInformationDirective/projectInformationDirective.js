app.directive('projectInformationDirective', function (projectService, $stateParams) {
    return {
        restrict: 'E', 
        templateUrl: 'app/components/home/projects/projectInformationDirective/projectInformation.html',
        controller: 'ProjectInformationController',
        link: function(scope, elem, attr) {
            scope.project = projectService.projects.find(project => project.name === $stateParams.name);
        }   
    }
});