app.directive('projectInformationDirective', function (projectService, $stateParams) {
    return {
        restrict: 'E', 
        templateUrl: 'app/components/home/projects/projectInformationDirective/projectInformation.html',
        controller: 'ProjectInformationController',
        controllerAs: '$ctrl',
        link: function(scope, elem, attr) {
            scope.project = projectService.projects.find(project => project.name === $stateParams.name);
            scope.hasGitHubLink = scope.project.link != "" ? true : false;
            
            $('.carousel-control.left').click(function() {
                $('#myCarousel').carousel('prev');
                $('#imageViewer-myCarousel').carousel('prev');
            });

            $('.carousel-control.right').click(function() {
                $('#myCarousel').carousel('next');
                $('#imageViewer-myCarousel').carousel('next');
            });
        }   
    }
});