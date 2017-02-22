app.directive('hobbyCircleDirective', function($interval) {
    return {
        restrict: 'E',
        scope: {
            hobbies: '='
        },
        templateUrl: 'app/components/home/about/hobbyCircleDirective/hobbyCircle.html',
        controller: 'hobbyCircleController',
        controllerAs: '$ctrl',
        link: function(scope, elem, attr) {
            
//            $interval(console.log('test'), 1000);
            var checkSize = function() {
                scope.checkWidth = $('.hobby-circle-parent-container').width();
                scope.checkHeight = $('.hobby-circle-parent-container').height();

                // Take sqrt of width^2 + height^2 
                scope.radius = Math.pow(Math.pow(scope.checkWidth, 2) + Math.pow(scope.checkHeight, 2), (1/2.4));
//                console.log(scope.radius);
            }
            
            $interval(checkSize, 500);
            
//            checkSize();
//            console.log('width', scope.checkWidth);
//            console.log('height', scope.checkHeight);
//            
//        }
        }
    }
});

//.directive("sizeWatcher", function ($timeout) {
//    return {
//        scope: {
//            sizeWatcherHeight: '=',
//            sizeWatcherWidth: '=',
//        },
//        link: function( scope, elem, attrs ){
//            function checkSize(){
//                scope.sizeWatcherHeight = elem.prop('offsetHeight');
//                scope.sizeWatcherWidth = elem.prop('clientWidth');
//                $timeout( checkSize, 1000 );
//            }
//            checkSize();
//        }
//    };
//}