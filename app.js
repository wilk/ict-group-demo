angular.module('constants', [])
    .constant('COMPONENT_BASE_URL', './');

angular.module('lol', [
    'ngRoute',
    'ui.router'
])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('user', {
                url: '/user',
                controller: 'userCtrl',
                template: '<div class="user">{{surname}}</div>'
            });
    }])
    .controller('userCtrl', ['$scope', function ($scope) {
        $scope.surname = 'foo';
    }])
    .constant('BASE_URL', 'http://localhost')
    .controller('myCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.name = 'pippo';
        $scope.host = $location.host();

        $scope.set = function (name) {
            $scope.name = name;
        };
    }]);