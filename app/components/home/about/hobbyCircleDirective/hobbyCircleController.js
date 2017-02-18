app
    .controller('hobbyCircleController', function($scope) {
    
        var self = this;

        var radius = 400;
        var angle = 0;

        //TODO: Get testArray from scope. 
        $scope.testArray = ['test1','test2','test3','test4', 'test5'];
        var hobbyLength = $scope.testArray.length;

        $scope.XValues = [];
        $scope.YValues = [];

        var circleAngleIncrements = (2*Math.PI)/hobbyLength;

        //Offset it if hobbyLength is even to ensure even placemment. 
        //            if (hobbyLength % 2 === 0) {
        //                angle += circleAngleIncrements/2;
        //            }

        var width = $('.hobby-circle-parent-container').width();
        var height = $('.hobby-circle-parent-container').height();

        //Append directives to hobbyCircles with different values all at once with a single ng-html binding. 
        $scope.testArray.forEach(function() {
            let x = Math.round(width/2 + (radius * Math.cos(angle)));
            let y = Math.round(height/2 + (radius * Math.sin(angle)));

            console.log('X, Y: ', x, y);

            $scope.XValues.push(x);
            $scope.YValues.push(y);
            angle += circleAngleIncrements;
        });
});