angular.module('portfolio')
    .controller("ProjectCtrl", function ($scope, $http) {
        $http.get('data/projects.json')
    .success(function(data, status, headers, config) {
        $scope.projects = data;
        console.log($scope.projects);
    })
    .error(function(data, status, headers, config) {
       // Log here. 
    });
});