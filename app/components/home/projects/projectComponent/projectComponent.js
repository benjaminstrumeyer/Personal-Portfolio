app.component('projectComponent', {
    restrict: 'EA',
    controller: 'ProjectController',
    templateUrl: '/app/components/home/projects/projectComponent/project.html',
    bindings: { 
        name: '='
    }
});