angular.module('portfolio')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider 
            .state('projects', {
                url: '/projects',
                templateUrl: '/app/components/home/projects/projectInfo/projectInfo.html',
            });
});