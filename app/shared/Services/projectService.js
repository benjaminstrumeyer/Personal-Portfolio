app
.service('projectService', function($http) {
    var self = this;
    
    self.projects = [];
    
    var getProjectInformation = function() {
        $http.get('data/projects.json')
        .success(function(result) {
            self.projects = result;
        });
    }
    
    getProjectInformation();
    
    self.getProjectInfo = function() {
        return self.projects;
    }
});