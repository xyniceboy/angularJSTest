var myModule = angular.module("MyModule", []);

//注射器加载完�?有模块时，此方法执行�?�?
myModule.run(function($templateCache) {
	$templateCache.put("hello.html","<div>Hello everyone!!!!!</div>")
});

myModule.directive("hello", function($templateCache) {
    return {
        restrict: 'AECM',
        template: $templateCache.get("hello.html"),
        replace: true
    }
});
