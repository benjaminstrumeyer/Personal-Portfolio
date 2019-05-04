app.
    controller('contactController', function($filter, $window) {
    
    var self = this;
    
    self.title = "Let's Get in Touch";
    self.motiveDescription = "Hi there! I'm always up for a chat about new opportunities or tech in general. Shoot me an email, I'm friendly!";
    self.email = "ben.strumeyer@gmail.com";
    self.github = "benstrumeyer";
    self.resume = "Resume";
    
    self.date = $filter('date')(new Date(), 'yyyy');
    
    self.viewResume = function() {
        $window.open('assets/docs/Resume.pdf');
    };
    
    self.viewGithub = function() {
        $window.open('https://github.com/benstrumeyer');
    }
    
    
    
});