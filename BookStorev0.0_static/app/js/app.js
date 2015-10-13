var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'
]);

// routeProvider 是 angularJS 提供的一个路由机制
// angularJS-1.2以后将各个机制进行了模块化（比如：route、animate没有放在同一个angular.js 中）。如果提示
// routeProvider 不是对象或者没有找到，就得在 *.html中引入 对应的 angular-route.js

// 这会有一个问题，没办法深层次嵌套路由（就是点进一个再点进一个）。所有就有人提出了 UIRoute
bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list', {
        templateUrl: 'tpls/bookList.html',
        controller: 'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
