app.directive('hobbyCircleDirective', function() {
    return {
        restrict: 'E',
        scope: {
            hobbies: '='
        },
        templateUrl: 'app/components/home/about/hobbyCircleDirective/hobbyCircle.html',
        controller: 'hobbyCircleController',
        controllerAs: '$ctrl',
        link: function(scope, attr, elem) {
            var radius = 400;
            
            //TODO: Get testArray from scope. 
            var testArray = ['test1','test2','test3','test4'];
            var hobbyLength = testArray.length;
            
            var circleAngleIncrements = 360/hobbyLength;
            //Offset it if hobbyLength is even
            
            var height = $('.hobby-circle-parent-container').height();
            var width = $('.hobby-circle-parent-container').width();
            
            
            var hobbyCircles = "";
            
            //Append directives to hobbyCircles with different values all at once with a single ng-html binding. 
            testArray.forEach(function() {
                
            });
        }
    }
});