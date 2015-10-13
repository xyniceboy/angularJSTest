var myModule=angular.module("MyModule",[]);

myModule.directive("hello",function(){
	return{
		// restrict 表示匹配模式
		//(共有A(attribute属�??)E(element元素)M(commit注释)C(classCSS的样式类)四种匹配模式)�?
		restrict:'AEMC',
		template:'<div>hi everyone!</div>',
		replace:true
	}
});