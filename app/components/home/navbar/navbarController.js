app
.controller('navbarController', function($scope) {
   
    var self = this;
    
    $scope.smoothScroll = function(id) {
        
        let ID = '#' + id;
        
        $('html, body').animate({
            scrollTop: $(ID).offset().top
        }, 300, function(){
     });
    }
    
});