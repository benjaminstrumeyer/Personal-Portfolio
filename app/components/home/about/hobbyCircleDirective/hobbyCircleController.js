app
    .controller('hobbyCircleController', function($scope, hobbyService) {
    
        var self = this;
        
        var hobbyInformation = hobbyService.getHobbyInfo();
    
        console.log(hobbyInformation);
    
    
        var radius = 400;
        var angle = 0;

        $scope.testArray = [1, 2, 3, 4];
        var hobbyLength = $scope.testArray.length;

        $scope.XValues = [];
        $scope.YValues = [];

        var circleAngleIncrements = (2*Math.PI)/hobbyLength;

//        Offset it if hobbyLength is odd to ensure even placemment. 
        if (hobbyLength % 2 === 1) {
            angle += circleAngleIncrements/2;
        }

        var width = $('.hobby-circle-parent-container').width();
        var height = $('.hobby-circle-parent-container').height();

        //Append directives to hobbyCircles with different values all at once with a single ng-html binding. 
        $scope.testArray.forEach(function() {
            let x = Math.round(width/2 + (radius * Math.cos(angle)));
            let y = Math.round(height/2 + (radius * Math.sin(angle)));

            $scope.XValues.push(x);
            $scope.YValues.push(y);
            angle += circleAngleIncrements;
        });
});