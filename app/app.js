angular.module('example', [
    'ngRoute',
    'ui.router',
    'example.components',
    'example.common'
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<div>HOME</div>'
            })
            .state('404', {
                url: '/404',
                template: '<div>404 Not Found</div>'
            });

        $urlRouterProvider.otherwise('/404');
    }]);