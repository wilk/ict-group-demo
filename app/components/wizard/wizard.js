angular.module('wizard', [
    'ngStorage',
    'ngRoute',
    'ui.router',
    'constants'
])
    .config(['$stateProvider', 'COMPONENT_BASE_URL', function ($stateProvider, COMPONENT_BASE_URL) {
        $stateProvider
            .state('wizard', {
                url: '/wizard',
                abstract: true,
                controller: function () {console.log('stica');},
                template: '<ui-view></ui-view>'
            })
            .state('wizard.customer', {
                url: '/customer',
                controller: 'customerCtrl',
                cache: true,
                templateUrl: COMPONENT_BASE_URL + 'wizard/customer/customer.html'
            })
            .state('wizard.detail', {
                url: '/detail',
                controller: 'detailCtrl',
                templateUrl: COMPONENT_BASE_URL + 'wizard/detail/detail.html'
            });
    }]);