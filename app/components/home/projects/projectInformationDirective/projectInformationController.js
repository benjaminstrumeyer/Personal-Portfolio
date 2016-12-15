app
    .controller('ProjectInformationController', function($stateParams) {
        
        var self = this;
    
        var getDescriptionClass = function() {
            var state = $stateParams.name.replace(/\s/g,'').toLowerCase();
            var descriptionClass = state + "Description";
            return descriptionClass;
        }
        
        var init = function() {
            self.descriptionClass = getDescriptionClass();
            console.log(self.descriptionClass);
        }
        
        init();
    
});
        