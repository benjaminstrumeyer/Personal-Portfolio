app.component('projectComponent', {
    scope: {
      projectName: "@"  
    },
    restrict: 'E',
    controller: 'ProjectController',
    templateUrl: '/app/components/home/projects/projectComponent/project.html',
    link: function(scope, elem, attrs) {
//                var technologies = scope.technologies;
        console.log(scope.projects);
    }
});
               