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
            var project = null;
            
            switch(projectName.toLowerCase()) {
                case "hero hq":
                    project = projects[0];
                    break;
                case "paws for a cause": 
                    project = projects[1];
                    break;
                case "natural language processing steam reviews":
                    project = projects[2];
                    break;
                case "personal portfolio": 
                    project = projects[3];
                    break;
                default: 
                    project = null;
            }
            
            return project;
        }
    
    });