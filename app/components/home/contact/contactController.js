app.
    controller('contactController', function($filter, $window) {
    
    var self = this;
    
    self.title = "Let's Get in Touch";
    self.motiveDescription = "React and C# developer whose always up for a chat about new opportunties or the future of javascript. Shoot me an email, I promise I'm friendly!";
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