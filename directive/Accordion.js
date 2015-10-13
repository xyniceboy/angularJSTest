var expanderModule = angular.module('expanderModule', []);

expanderModule.directive("accordion", function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: function() {
            var expander = [];
            this.gotOpened = function(selectedExpander) {
                angular.forEach(expander, function(expander) {
                    if (selectedExpander != expander) {
                        expander.showMe = false;
                    }
                });
            }
            this.addExpander = function(expander) {
                expanders.push(expander);
            }
        }
    }
});


expanderModule.directive("expander", function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?accordion', //依赖与外部 accordion，那么 link 就可以接受弟四个参数了

        scope: {
            title: '=expanderTitle'
        },
        template: '<div>' + '<div class="title" ng-click="toggle()">{{title}}</div>' + '<div class="body" ng-show="showMe" ng-transclude></div>' + '</div>',
        link: function(scope, element, attrs, accordionController) {
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function() {
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            }
        }
    }
});

expanderModule.controller('SomeController', function($scope) {
    $scope.expanders = [{
        title: 'click me to expand',
        text: 'Hi there folks, I am the content that was hidden but is now shown.'
    }, {
        title: 'Click this',
        text: 'I am even better text than you have seen previously'
    }, {
        title: 'Test',
        text: 'test'
    }];
});

