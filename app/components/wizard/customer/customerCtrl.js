(function () {
    'use strict';

    function CustomerCtrl($scope, $state, $timeout, wizard) {
        $scope.customers = wizard.customers();
        $scope.loading = false;
        $scope.loadingText = 'Choose me';

        $scope.saveCustomer = function (customer) {
            $scope.loading = true;
            $scope.loadingText = 'Saving...';
            $timeout(function () {
                wizard.data({customer: customer});
                $state.go('wizard.detail');
            }, 2000);
        };
    }
    CustomerCtrl.$inject = ['$scope', '$state', '$timeout', 'wizard'];

    /*var CustomerCtrl = ['$scope', '$state', '$timeout', 'wizard', function ($scope, $state, $timeout, wizard) {
        $scope.customers = wizard.customers();
        $scope.loading = false;
        $scope.loadingText = 'Choose me';

        $scope.saveCustomer = function (customer) {
            $scope.loading = true;
            $scope.loadingText = 'Saving...';
            $timeout(function () {
                wizard.data({customer: customer});
                $state.go('wizard.detail');
            }, 2000);
        };
    }];*/

    angular.module('wizard').controller('customerCtrl', CustomerCtrl);
})();

/*angular.module('wizard')
    .controller('customerCtrl', ['$scope', '$state', '$timeout', 'wizard', function ($scope, $state, $timeout, wizard) {
        $scope.customers = wizard.customers();
        $scope.loading = false;
        $scope.loadingText = 'Choose me';

        $scope.saveCustomer = function (customer) {
            $scope.loading = true;
            $scope.loadingText = 'Saving...';
            $timeout(function () {
                wizard.data({customer: customer});
                $state.go('wizard.detail');
            }, 2000);
        };
    }]);*/

/*(function () {
    function WizardService() {

    }

    function WizardProvider() {
        this.$get = function () {
            return new WizardService();
        }
    }

    angular.module('wizard', []).provider('wizard', WizardProvider);
})();*/
