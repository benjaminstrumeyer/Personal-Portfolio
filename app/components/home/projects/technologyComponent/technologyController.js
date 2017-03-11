app.
    controller('technologyController', function() {
    
    var self = this;
    
    var init = function() {
        if (self.technology === "Cloud Datastore") {
            self.cssClass = "CloudDatastore";
        }
        else {
            self.cssClass = self.technology;
        }
    }
    
    init();
})