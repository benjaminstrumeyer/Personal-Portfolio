app.directive('scrollSpyDirective', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attr) {
            $(elem).scrollspy({target: "#main-navbar"})
        }
    } 
});