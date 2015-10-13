var myModule = angular.module("MyModule", []);

myModule.directive("hello", function() {
    return {
        restrict: 'AE',
        // {{}} 双向数据绑定，用来展示用户的内容
        scope:{},    //独立scope, 去掉的话，就是另外一种 scope
        //还有这样的独立scope，angularJS 怎样去绑定，这个就是angularJS的策略了
        template:'<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace:true
    }
});