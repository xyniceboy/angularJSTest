var myModule = angular.module("MyModule", []);

myModule.directive("hello", function() {
    return {
        restrict: 'AECM',
        template: "<div>Hello everyone!</div>",
        replace: true
    }
});
