angular.module('demo', [
    'ngStorage'
])
    .service('session', ['$injector', function ($injector) {
        var $localStorage = $injector.get('$localStorage');
        this.get = function (prop) {
            return $localStorage[prop];
        };
        this.set = function (prop, val) {
            return $localStorage[prop] = val;
        };
    }])
    .controller('aCtrl', ['$scope', '$q', '$compile', '$interpolate', 'starFilter', 'session', function ($scope, $q, $compile, $interpolate, starFilter, session) {
        session.set('token', 'sadoodskdsoa994k949kf');
        console.log(session.get('token'));

        var users = ['a', 'b', 'c'];

        session.set('users', users);

        var template = [
            '<div>',
                '<b>{{myName}}</b>',
                '<span style="color: {{color}}">{{text}}</span>',
            '</div>'
        ].join('');
        var compile = $interpolate(template);
        var html = compile({myName: 'foo and bar', text: 'A text', color: 'red'});

        console.log(html);

        $scope.pdf = function () {
                /*var doc = new jsPDF();
                doc.addHTML($(document).find('body')[0], function () {
                    doc.save('esempio.pdf');
                });*/

                users[0] = 'pippo';
        };


        /*var syncTraslochi = function () {
            var dfd = $q.defer();
            uploadTraslochi(function () {
                downloadTraslochi(function (traslochi) {
                    localStorage.traslochi = traslochi;
                    dfd.resolve();
                });
            });
            return dfd.promise;
        };
        var syncSopralluoghi = function () {
            var dfd = $q.defer();
            uploadSopralluoghi(function () {
                downloadSopralluoghi(function (sopralluoghi) {
                    localStorage.sopralluoghi = sopralluoghi;
                    dfd.resolve();
                });
            });
            return dfd.promise;
        };

        $q.all(syncTraslochi(), syncSopralluoghi())
            .then(function () {

            })
            .catch(function () {

            })*/
        /*var syncFn = function (value) {
            value += ' ' + value;
            console.log(value);

            throw new Error('exception');

            return value;
        };

        var asyncFn = function (value) {
            var dfd = $q.defer();

            setTimeout(function () {
                try {
                    value += ' ' + value;
                    console.log(value);

                    //throw new Error('exception');

                    //cb(null, value);
                    dfd.resolve(value);
                }
                catch (err) {
                    //cb(err);
                    dfd.reject(value);
                }
            }, 1000);

            return dfd.promise;
        };

        try {
            var changed = 'foo';
            console.log(changed);
            changed = syncFn(changed);
            console.log(changed);
        }
        catch (err) {
            console.error(err);
        }

        changed = 'pippo';
        console.log(changed);
        asyncFn(changed)
            .then(function (value) {
                changed = value;
                console.log(changed);
            }, function (err) {
                console.error(err);
            });

        asyncFn(changed)
            .then(function (value) {
                changed = value;
                console.log(changed);
                return asyncFn(changed);
            })
            .then(function (value) {
                changed = value;
                console.log(changed);
                return asyncFn(changed);
            })
            .then(function (value) {
                changed = value;
                console.log(changed);
                return asyncFn(changed);
            })
            .then(function (value) {
                changed = value;
                console.log(changed);
                return asyncFn(changed);
            })
            .then(function (value) {
                changed = value;
                console.log(changed);
                return asyncFn(changed);
            })
            .then(function (value) {
                changed = value;
                console.log(changed);
                return asyncFn(changed);
            })
            .catch(function (err) {
                console.error(err);
            });

        $q.all([
            asyncFn(changed),
            asyncFn(changed),
            asyncFn(changed),
            asyncFn(changed),
            asyncFn(changed),
            asyncFn(changed),
            asyncFn(changed),
            asyncFn(changed),
            asyncFn(changed)
        ])
            .then(function (values) {
                console.log(values);
            }, function (err) {
                console.log(err);
            });*/

        /*asyncFn(changed, function (err, value) {
            if (err) return console.error(err);
            changed = value;
            console.log(changed);
            asyncFn(changed, function (err, value) {
                if (err) return console.error(err);
                changed = value;
                console.log(changed);
                asyncFn(changed, function (err, value) {
                    if (err) return console.error(err);
                    changed = value;
                    console.log(changed);
                    asyncFn(changed, function (err, value) {
                        if (err) return console.error(err);
                        changed = value;
                        console.log(changed);
                        asyncFn(changed, function (err, value) {
                            if (err) return console.error(err);
                            changed = value;
                            console.log(changed);
                            asyncFn(changed, function (err, value) {
                                if (err) return console.error(err);
                                changed = value;
                                console.log(changed);
                            });
                        });
                    });
                });
            });
        });*/


        $scope.users = [{
            name: 'Foo',
            age: 150
        }, {
            name: 'Bar',
            age: 60
        }, {
            name: 'Pippo',
            age: 80
        }];
        $scope.obj = {
            a: 10,
            b: {
                c: 30,
                d: {
                    a: 30
                }
            },
            c: ['asd', 'lol']
        };
        $scope.name = 'foo';
        $scope.surname = 'bar';
        $scope.introduce = function () {

        };

        $scope.clickHandler = function (name) {
            $scope.name = starFilter('bla bla', '$');
        };

        $scope.validate = function () {return false;};
    }])
    // dm-clock
    .directive('dmClock', ['$interval', '$filter', 'dateFilter', function ($interval, $filter, dateFilter) {
        return {
            restrict: 'EA',
            templateUrl: 'views/clock.html',
            link: function (scope, el, attrs) {
                var dateFilter2 = $filter('date');
                scope.time = dateFilter(new Date(), 'hh:mm:ss');
                $interval(function () {
                    scope.time = dateFilter2(new Date(), 'hh:mm:ss');
                    //el.html('<b>Hello world</b>');
                }, 1000);
            }
        };
    }])
    .directive('dmDecorator', [function () {
        return {
            restrict: 'EA',
            templateUrl: 'views/decorator.html',
            require: '^dmSuperDecorator',
            //require: 'ngModel',
            scope: {
                name: '=',
                surname: '@',
                introduce: '&'
            },
            link: function (scope, el, attrs, superDecoratorCtrl) {
                //console.log(superDecoratorCtrl.$isEmpty());
            }
        };
    }])
    .directive('dmSuperDecorator', [function () {
        return {
            restrict: 'EA',
            controllerAs: 'fooCtrl',
            controller: ['$scope', function ($scope) {
                this.introduce = function () {
                    console.log('Hello world');
                };
            }]
        };
    }])
    .filter('star', [function () {
        return function (value, symbol) {
            symbol = symbol || '*';
            return [symbol, value, symbol].join(' ');
        };
    }])
    .directive('dmPrint', ['$timeout', function ($timeout) {
        return {
            link: function (scope, el, attrs) {
                /*$timeout(function () {
                    console.log(el[0].outerHTML);
                    var doc = new jsPDF();
                    doc.fromHTML(el[0].outerHTML, 25, 25, {
                        width: 300,
                        elementHandlers: {
                            '#pdf': function () {return true;}
                        }
                    });
                },5000);*/
            }
        };
    }]);
