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
        
        //TODO: $watch this and calculate appropriate radius to make the circle responsive. 
        var width = $('.hobby-circle-parent-container').width();
        var height = $('.hobby-circle-parent-container').height();
    
        $scope.$watch(function() {
            return $scope.radius;
        },
        function(newVal, oldVal) {
            
            //Clear the current X and Y values;
            $scope.XValues = [];
            $scope.YValues = [];
            
            for (let i = 0; i < $scope.hobbyLength; i++) {
                let x = Math.round(width/2 + (newVal * Math.cos(angle)));
                let y = Math.round(height/2 + (newVal * Math.sin(angle)));

                $scope.XValues.push(x);
                $scope.YValues.push(y);

                console.log('My X: ',$scope.XValues);
                angle += circleAngleIncrements;
        }
        });
//
//        for (let i = 0; i < $scope.hobbyLength; i++) {
//            console.log('The radius is: ', $scope.radius);
//            let x = Math.round(width/2 + ($scope.radius * Math.cos(angle)));
//            let y = Math.round(height/2 + ($scope.radius * Math.sin(angle)));
//
//            $scope.XValues.push(x);
//            $scope.YValues.push(y);
//            angle += circleAngleIncrements;
//        }
    
        $scope.getHobbyLength = function(num) {
            return new Array(num);   
        }
});