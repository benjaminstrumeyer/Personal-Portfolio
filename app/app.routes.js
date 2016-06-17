angular.module('portfolio')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');
    
        $stateProvider 
            .state('viewProject', {
                url: '/projects/:name',
                templateUrl: '/app/components/home/projects/projectInfo/projectInfo.html',
            });
});