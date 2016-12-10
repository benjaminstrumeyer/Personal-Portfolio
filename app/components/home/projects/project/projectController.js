angular.module('portfolio')
    .controller("ProjectCtrl", function ($scope, $http, $stateParams) {
        $http({
            url: 'data/projects.json',
            method: 'get',
            params: {name: $stateParams.name}
        })
        .success(function(data, status, headers, config) {
            $scope.projects = data;
            $scope.parentPath = "/assets/img/";
            
            var projectName = $stateParams.name;
            
            $scope.currentProject = getProject(projectName, data);
            
            console.log('Current Project: ', $scope.currentProject.name);
            
            
            
        })
        .error(function(data, status, headers, config) {
        // Log here. 
        });
    
        function getProject(projectName, projects) {
            var project = projects.filter(x => x.name.toLowerCase() === projectName.toLowerCase())[0];
            return project;
        }
    
    });