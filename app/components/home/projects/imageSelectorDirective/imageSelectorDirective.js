app
.directive('imageSelectorDirective', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/home/projects/imageSelectorDirective/imageSelector.html',
        scope: {
            imgSrc: '@',
            index: '@'
        },
        link: function(scope, elem, attr){
            scope.imageSource = attr.imgSrc;
        }
    }
});