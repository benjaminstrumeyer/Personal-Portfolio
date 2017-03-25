app.directive('navbarDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/home/navbar/navbar.html',
        controller: 'navbarController',
        link: function(scope, elem, attr) {
        }
    }
});