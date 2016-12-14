app.directive('projectInformationDirective', function (projectService) {
    return {
        restrict: 'E', 
        templateUrl: 'app/components/projects/projectInformationDirective/projectInformation.html',
        controller: 'ProjectInformationController', 
        link: function(scope, elem, attr) {
            scope.project = projectService.projects;
        }   
    }
});