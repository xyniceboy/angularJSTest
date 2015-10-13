var myModule = angular.module("MyModule", []);

myModule.directive("superman", function() {
    return {
        scope: {},  //scope配置成了一个空的对象。创建一个独立的作用域。
        restrict: 'AE',
        //如果想要指令暴露出一些方法给外部用，那么就放在controller(指令内部的)中。
        controller: function($scope) {
            // controller 是指令内部的controller, 用来给指令暴露出一组public方法，给外部去调用
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },

        //link是处理指令内部事务的(eg.给元素绑定事件、数据)
        link: function(scope, element, attrs) {
            //angularJS 内置了一个jQueryLight
            element.addClass('btn btn-primary');  //btn btn-primary 这两个样式是bootstrap创建的
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            });
        }
    }
});

myModule.directive("strength", function() {
    return {
        require: '^superman',   //require 表示依赖于 后面的
        link: function(scope, element, attrs, supermanCtrl) {

            //这样就可以使用supermanCtrl控制器暴露出来的方法了
            supermanCtrl.addStrength();
        }
    }
});

myModule.directive("speed", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});


myModule.directive("light", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});
