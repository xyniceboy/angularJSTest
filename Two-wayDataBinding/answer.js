var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {
    $scope.userInfo = {
        email: "bwang2009@yeah.net",
        password: "123456",
        autoLogin: true
    };

    $scope.getFormData = function() {
        console.log($scope.userInfo);
    };

    $scope.setFormData = function() {
        $scope.userInfo = {
            email: 'helloworld@126.com',
            password: '123456',
            autoLogin: false
        }
    }

    $scope.resetForm = function() {
        $scope.userInfo = {
            email: "bwang2009@yeah.net",
            password: "123456",
            autoLogin: true
        };
    }
}])
