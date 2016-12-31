app
.directive('imageSelectorDirective', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/home/projects/imageSelectorDirective/imageSelector.html',
        scope: {
            imgSrc: '@',
            index: '@'
        },
        controllerAs: "$ctrl",
        transclude: true,
        link: function(scope, elem, attr){
            
        }
    }
});