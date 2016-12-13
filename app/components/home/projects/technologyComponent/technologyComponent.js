app.component('technologyComponent', {
    restrict: 'E', 
    templateUrl: 'app/components/home/projects/technologyComponent/technology.html',
    controller: 'technologyController',
    bindings: {
        technology: '@'
    }
});