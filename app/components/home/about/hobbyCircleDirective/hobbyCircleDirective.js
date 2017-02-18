app.directive('hobbyCircleDirective', function() {
    return {
        restrict: 'E',
        scope: {
            hobbies: '='
        },
        templateUrl: 'app/components/home/about/hobbyCircleDirective/hobbyCircle.html',
        controller: 'hobbyCircleController',
        controllerAs: '$ctrl',
        transclude: true,
        link: function(scope, elem, attr, ctrl, transclude) {
//             Get hobby objects. 
            var collection = scope.$eval(attr.hobbies);
            
            collection.forEach(function(item, index) {
//                transclude(function(transEl, transScope) {
//                    // {{myEach}}
//                    transScope.myEach = item;
//                    
//                    transEl.attr('x', scope.XValues[index]);
//                    transEl.attr('y', scope.YValues[index]);
//                    console.log(scope.XValues[index]);
//                    elem.parent().append(transEl);
//                });
                
                transclude(function(clone) {
                    elem.append(clone);
                });
                
            });
        }
    }
});