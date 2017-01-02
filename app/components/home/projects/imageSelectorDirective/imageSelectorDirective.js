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
            console.log(attr.index);
        }
    }
});