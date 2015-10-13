var myModule = angular.module("MyModule", []);

myModule.controller("MyCtrl", ['$scope', function($scope) {
    $scope.sayHello = function{
    alter("Hello ",+name)；
}])

myModule.directive("greeting", function() {
    return {
        restrict: 'AE',
        // {{}} 双向数据绑定，用来展示用户的内容

        scope: {
            greet: '&'
        },

        template: '<input type="text' ng-module="userName" /}</br>' +
        .<button class="btn btn-default" ng-click=greet({name:userName})""
        // link: function(scope, element, attrs) {
        //     scope.flavor = attrs.flavor;
        // }

        // 等效于

    }
});
