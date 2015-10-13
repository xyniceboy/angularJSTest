var myModule = angular.module("MyModule", []);

myModule.directive("hello", function() {
    return {
        restrict: 'AECM',
        transclude: true,
        template: "<div>Hello everyone!<div ng-transclude></div></div>"
    }
});
