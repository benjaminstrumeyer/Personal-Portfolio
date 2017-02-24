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
            
            var checkSize = function() {
                scope.checkWidth = $('.hobby-circle-parent-container').width();
                scope.checkHeight = $('.hobby-circle-parent-container').height();
                
                scope.radius = Math.min(scope.checkWidth/2.3, scope.checkHeight/2.3);
            }
            
            //Call it on page load
            checkSize();
            
            // Update radius values for responsive design
            $interval(checkSize, 1000);
            
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