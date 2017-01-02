app
.directive('imageSelectorDirective', function() {
    return {
        restrict: 'A',
        scope: {
            index: '@'
        },
        controllerAs: "$ctrl",
        transclude: true,
        link: function(scope, elem, attr){
            $(elem).click(function() {
                $('#myCarousel').carousel(parseInt(attr.index));
                $('#imageViewer-myCarousel').carousel(parseInt(attr.index));
            });
        }
    }
});