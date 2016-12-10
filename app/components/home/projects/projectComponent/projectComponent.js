app.component('project', {
    restrict: 'E',
    controller: 'ProjectCtrl',
    templateUrl: '/app/components/home/projects/project/project.html',
    link: function(scope, elem, attrs) {
//                var technologies = scope.technologies;
        console.log(scope.projects);
    }
});
               