angular.module('portfolio')
    .controller("ProjectCtrl", function ($scope, $http) {
        $http.get('data/projects.json')
    .success(function(data, status, headers, config) {
        $scope.projects = data;
        console.log($scope.projects);
        $scope.parentPath = "/assets/img/";
            
        function viewProject(currentProjectName) {
            $scope.projectName = currentProjectName;
        }
        
    })
    .error(function(data, status, headers, config) {
       // Log here. 
    });
});