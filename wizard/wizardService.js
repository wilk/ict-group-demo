angular.module('wizard')
    .service('wizard', ['$localStorage', function ($localStorage) {
        this._customers = $localStorage.data || [];
        this._data = $localStorage.wizard || {};

        this.customers = function (customers) {
            customers = customers || this._customers;
            return this._customers = customers;
        };

        this.data = function (data) {
            data = data || this._data;
            angular.extend(this._data, data);
            return $localStorage.wizard = this._data;
        };
    }]);