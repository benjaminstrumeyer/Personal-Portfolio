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
            self.notificationMessage = "Click for Fullscreen View";
            self.carouselNotification = false;
        }
        
        init();
});
        