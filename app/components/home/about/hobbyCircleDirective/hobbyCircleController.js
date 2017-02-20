app
    .controller('hobbyCircleController', function($scope, hobbyService) {
    
        var self = this;
    
    
        var radius = 400;
        var angle = 0;

//        $scope.testArray = [1, 2, 3, 4];
        $scope.hobbyLength = 7;

        $scope.XValues = [];
        $scope.YValues = [];

        var circleAngleIncrements = (2*Math.PI)/$scope.hobbyLength;

//        Offset it if hobbyLength is odd to ensure even placemment. 
        if ($scope.hobbyLength % 2 === 1) {
            angle += circleAngleIncrements/2;
        }

        var width = $('.hobby-circle-parent-container').width();
        var height = $('.hobby-circle-parent-container').height();

        //Append directives to hobbyCircles with different values all at once with a single ng-html binding. 
//        $scope.testArray.forEach(function() {
//            let x = Math.round(width/2 + (radius * Math.cos(angle)));
//            let y = Math.round(height/2 + (radius * Math.sin(angle)));
//
//            $scope.XValues.push(x);
//            $scope.YValues.push(y);
//            angle += circleAngleIncrements;
//        });
    
        for (let i = 0; i < $scope.hobbyLength; i++) {
            let x = Math.round(width/2 + (radius * Math.cos(angle)));
                let y = Math.round(height/2 + (radius * Math.sin(angle)));

                $scope.XValues.push(x);
                $scope.YValues.push(y);
                angle += circleAngleIncrements;
        }
    
        $scope.getHobbyLength = function(num) {
            return new Array(num);   
        }
});