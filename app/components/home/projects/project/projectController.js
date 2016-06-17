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
            
            alert($stateParams.name);
            
            $scope.currentProject = getProject($stateParams.name, $scope.projects);
            
//            console.log($scope.currentProject);
            
            
        })
        .error(function(data, status, headers, config) {
        // Log here. 
        });
    
        function getProject(projectName, projects) {
            var project = null;
            
            switch(projectName) {
                case "Hero HQ":
                    project = projects[0];
                    break;
                case "Paws For a Cause": 
                    project = projects[1];
                    break;
                case "Natural Language Processing Steam Reviews":
                    project = projects[2];
                    break;
                case "Personal Portfolio": 
                    project = projects[3];
                    break;
                default: 
                    project = null;
            }
            
            return project;
        }
    
    });