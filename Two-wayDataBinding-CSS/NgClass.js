var myCSSModule = angular.module('MyCSSModule', []);
myCSSModule.controller('HeaderController', ['$scope',
    function($scope) {
        $scope.isError = false;
        $scope.isWarning = false;
        $scope.showError = function() {
            $scope.messageText = 'This is error!';
            $scope.isError = true;
            $scope.isWarning = false;
        };

        $scope.showWaring = function() {
            $scope.messageText = 'Just a waring, Please carry on.';
            $scope.isError = false;
            $scope.isWarning = true;
        };
    }
])
