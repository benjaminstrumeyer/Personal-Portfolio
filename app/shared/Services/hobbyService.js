app
.service('hobbyService', function($http) {
    var self = this;
    
    self.hobbies = [];
    
    var getHobbyInformation = function() {
        $http.get('data/hobbies.json')
        .success(function(result) {
            self.hobbies = result;
        });
    }
    
    getHobbyInformation();
    
    self.getHobbyInfo = function() {
        return self.hobbies;
    }
});