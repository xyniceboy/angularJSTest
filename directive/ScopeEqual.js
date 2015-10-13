var myModule = angular.module("MyModule", []);

myModule.controller("MyCtrl", ['$scope', function($scope) {
    $scope.ctrlFlavor = "百威"；
}])

myModule.directive("drink", function() {
    return {
        restrict: 'AE',
        // {{}} 双向数据绑定，用来展示用户的内容

        // 等效于
        scope: {
            flavor: '='
        },

        template: '<input type="text" ng-model="flavor">'
        
        // link: function(scope, element, attrs) {
        //     scope.flavor = attrs.flavor;
        // }
    }
});
