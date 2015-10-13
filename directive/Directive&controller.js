var myModule = angular.module("MyModule", []);

myModule.controller("MyCtrl1", ['$scope', function($scope){
	$scope.loadData=function(){
		console.log("加载数据中....");
	}
}]);

myModule.controller("MyCtrl2", ['$scope', function($scope){
    $scope.loadData2=function(){
        console.log("加载数据中....2222");
    }
}]);

myModule.directive("loader", function() {
    return {
        restrict: 'AE',
        link:function(scope,element,attrs){
        // 内部写法跟写jQuery是一模一样的
        	element.bind("mouseenter",function(){
        		// scope.loadData();
                // scope.$apply("loadData()");
                //注意坑：howToLoad会被自动转换为小写的howtoload
                scope.$apply(attrs.howtoload)  //这样就是先了指令的复用，指令肯定是可以用在
                //不同的controller中的，所以一定要给指令配置项(='loadData()'、='loadData2()')

                //做到了：用指令调用上面控制器定义的方法
        	});
    	}
    }
});
