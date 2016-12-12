app
    .controller("ProjectController", function ($scope, $http) {
//        $http({
//            url: 'data/projects.json',
//            method: 'get'
//        })
//        .success(function(data, status, headers, config) { 
//            $scope.projects = data;
//            $scope.parentPath = "/assets/img/";
//            
////            $scope.currentProject = getProject(projectName, data);
//            
//        })
//        .error(function(data, status, headers, config) {
//        // Log here. 
//        });
//    
//        function getProject(projectName, projects) {
//            var project = projects.filter(x => x.name.toLowerCase() === projectName.toLowerCase())[0];
//            return project;
//        }
//    
        this.projectInfo = true;
    });