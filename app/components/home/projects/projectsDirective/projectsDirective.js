app.directive('projectsComponent', function(projectService) {
    return {
        restrict: 'E',
        controller: 'ProjectsController',
        templateUrl: 'app/components/home/projects/projectsDirective/projects.html',
        link: function(scope, elem, attrs) {                
            scope.projects = projectService.projects;
        }   
    }
});