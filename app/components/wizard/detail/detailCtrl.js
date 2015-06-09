angular.module('wizard')
    .controller('detailCtrl', ['$scope', 'wizard', function ($scope, wizard) {
        $scope.customer = {};
        angular.extend($scope.customer, wizard.data().customer);

        $scope.saveCustomer = function (customer) {
            wizard.data({customer: customer});
        };
    }]);