var myModule = angular.module("MyModule", []);

myModule.directive("hello", function() {
    return {
        restrict: 'AECM',
        template: 'hello.html',
        replace: true
    }
});
