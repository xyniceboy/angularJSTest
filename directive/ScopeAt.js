var myModule = angular.module("MyModule", []);

myModule.controller("MyCtrl", ['$scope', function($scope) {
    $scope.ctrlFlavor = "百威"；
}])

myModule.directive("drink", function() {
    return {
        restrict: 'AE',
        // {{}} 双向数据绑定，用来展示用户的内容


        scope: {
            flavor: '@'
        },

        template: '<div>{{flavor}}</div>',
        // link: function(scope, element, attrs) {
        //     scope.flavor = attrs.flavor;
        // }

        // 等效于

    }
});
