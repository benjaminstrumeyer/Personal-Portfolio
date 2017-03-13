app
    .controller('ProjectInformationController', function($scope, $stateParams) {
        
        var self = this;
    
        var getDescriptionClass = function() {
            var state = $stateParams.name.replace(/\s/g,'').toLowerCase();
            var descriptionClass = state + "Description";
            return descriptionClass;
        }
        
        var init = function() {
            self.descriptionClass = getDescriptionClass();
            self.notificationMessage = "Click to Expand Image";
            self.carouselNotification = false;
        }
        
        $scope.scrollTop = function() {
            $('html, body').scrollTop($('#projects').position().top);  
        }
        
        init();
});
        