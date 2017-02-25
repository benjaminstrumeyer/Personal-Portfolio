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
        }
    }
});

//app.directive("hobbyCircle", function($sce)
//{
//    return {
//        restrict: "E",
//        scope: {},
//        transclude: true,
//        templateUrl: './angular/hobbyCircle.html',
//        link: {
//            pre: function(scope, element, attrs, controller, transclude)
//            {
//                var children = transclude();
//                var hobbies = children.filter("hobby");
//                scope.blocks = [];
//
//                console.log(children);
//
//                var parentWidth = element.width();
//                var parentHeight = element.height();
//
//                var elemWidth = 50;
//                var elemHeight = 50;
//
//                var radius = (Math.min(parentWidth, parentHeight) / 2) - Math.min(elemWidth, elemHeight);
//                var angle = -Math.PI/2;
//                var circleAngleIncrements = (2*Math.PI)/hobbies.length;
//
//                // Append directives to hobbyCircles with different values all at once with a single ng-html binding. 
//                hobbies.each(function()
//                {
//                    var hobby = angular.element(this);
//
//                    var x = (parentWidth/2) + (radius * Math.cos(angle)) - (elemWidth/2);
//                    var y = (parentHeight/2) + (radius * Math.sin(angle)) - (elemHeight/2);
//
//                    scope.blocks.push({
//                        html: $sce.trustAsHtml(hobby.html()),
//                        style: {
//                            position: "absolute",
//                            left: x,
//                            top: y,
//                            width: elemWidth,
//                            height: elemHeight,
//                            "border-radius": 50,
//                            overflow: "hidden"
//                        }
//                    })
//                    angle += circleAngleIncrements;
//                });
//            }
//        }
//    };
//});