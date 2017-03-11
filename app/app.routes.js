app
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');
    
        $stateProvider
            .state('viewProject', {
                url: '/project/:name',
                template: "<project-information-directive></project-information-directive>",
                controller: 'ProjectInformationController'
            })
            .state('mainProjectPage', {
                url: '/',
                template: "<projects-component></projects-component>"
            });
    });