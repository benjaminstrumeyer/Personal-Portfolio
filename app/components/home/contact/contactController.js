app.
    controller('contactController', function($filter, $window) {
    
    var self = this;
    
    self.title = "Let's Get in Touch";
    self.motiveDescription = "Currently looking for a team to grow in. I'd love to hear about your company.";
    self.email = "benjamin.strumeyer@gmail.com";
    self.github = "benstrumeyer";
    self.resume = "Resume";
    
    self.date = $filter('date')(new Date(), 'yyyy');
    
    self.viewResume = function() {
        $window.open('assets/docs/Resume.pdf');
    };
    
    
    
});