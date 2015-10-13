var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls3/index.html'
                },
                'topbar@index': {
                    templateUrl: 'tpls3/topbar.html'
                },
                'main@index': {
                    templateUrl: 'tpls3/home.html'
                }
            }
        })
        .state('index.usermng', {
            url: '/usermng',
            views: {
                'main@index': {
                    templateUrl: 'tpls3/usermng.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go('index.usermng.addUserType');
                        }
                    }
                }
            }
        })
        .state('index.usermng.highendusers', {  //用到了.分割子区域
            url: '/highendusers',
            templateUrl: 'tpls3/highendusers.html'

        })
        .state('index.usermng.normalusers', {
            url: '/normalusers',
            templateUrl: 'tpls3/normalusers.html'

        })
        .state('index.usermng.lowusers', {
            url: '/lowusers',
            templateUrl: 'tpls3/lowusers.html'

        })
        .state('index.usermng.adduserType', {
            url: '/adduserType',
            templateUrl: 'tpls3/addusertypeform.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }

        })
        .state('index.permission', {
            url: '/permission',
            views: {
                'main@index': {
                    template: 'è¿™é‡Œæ˜¯æƒé™ç®¡ç?'
                }
            }
        })
        .state('index.report', {
            url: '/report',
            views: {
                'main@index': {
                    template: 'è¿™é‡Œæ˜¯æŠ¥è¡¨ç®¡ç?'
                }
            }
        })
        .state('index.settings', {
            url: '/settings',
            views: {
                'main@index': {
                    template: 'è¿™é‡Œæ˜¯ç³»ç»Ÿè®¾ç½?'
                }
            }
        })
})
