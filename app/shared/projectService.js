app
.service('projectService', function($http, $q) {
    var self = this;
    
    var projects = [];
    
    var getProjectInformation = function() {
        $http.get('data/projects.json')
        .success(function(result) {
            self.projects = result;
            console.log(self.projects);
        });
    }
    
    getProjectInformation();
});