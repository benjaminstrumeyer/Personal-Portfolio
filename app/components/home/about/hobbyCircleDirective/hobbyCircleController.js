app
    .controller('hobbyCircleController', function($scope, $timeout, hobbyService) {
    
        var self = this;
    
        $scope.numHobbiesHovered = 0;
        $scope.timer = 0;
    
        $scope.isHovered = false; 
        $scope.isDefault = true;

        var radius = 400;
        var angle = 0;

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
                
                angle += circleAngleIncrements;
            }
        });

        $scope.getHobbyLength = function(num) {
            return new Array(num);   
        }
        
        $scope.setCurrentHobby = function(currentHobbyName) {
            
            let currentHobby = hobbyService.hobbies.find(hobby => currentHobbyName === hobby.name);
            
            $scope.currentHobbyName = currentHobby.name;
            $scope.currentHobbyDescription = currentHobby.description;
            $scope.currentHobbyImgSrc = currentHobby.imgSrc;
            
            // Resets the variable that triggers the ng-hide animation 
            // This is so the animation can be repeated each time a user hovers over each individual circle
            $scope.isHovered = false;
            $scope.isDefault = false;
            $timeout(function() {
               $scope.isHovered = true; 
            });
            
            if ($scope.timer) {
                $timeout.cancel($scope.timer);
            }
            return;
        }
        
        $scope.setDefault = function() {
            $scope.timer = $timeout(function() {
                
                $scope.isHovered = false;
                $scope.isDefault = true;
            }, 7000);
        }
        
        $scope.isDogBackground = function() {
            if ($scope.currentHobbyName === 'Dogs') {
                return true;
            }
            return false;
        }
});