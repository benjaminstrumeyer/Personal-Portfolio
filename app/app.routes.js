app
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');
    
        $stateProvider 
            .state('viewProject', {
                url: '/project/:name',
                templateUrl: '/app/components/home/projects/projectInformationDirective/projectInformation.html',
                controller: 'ProjectInformationController'
            });
    });