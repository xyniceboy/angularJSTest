var appModule=angular.module('TestFormModule',[]);

appModule.controller("TestFormModule", function($scope){
	$scope.user={
		userName:'xynice',
		password:''
	};
	$scope.save=function(){
		alter("保存数据！");
	}
});