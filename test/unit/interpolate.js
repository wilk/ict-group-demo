var $interpolate,
    $controller,
    $rootScope,
    $http,
    BASE_URL;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

beforeEach(module('lol'));
beforeEach(inject(function (_$interpolate_, _BASE_URL_, _$controller_, _$rootScope_, _$http_) {
    $interpolate = _$interpolate_;
    BASE_URL = _BASE_URL_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $http = _$http_;
}));

describe('As a user I want to be able to use $interpolate service', function () {
    it('should exist the $interpolate service', function () {
        expect($interpolate).toBeDefined();
    });

    xit('should return a compile function', function () {
        var tpl = '<b>{{name}}</b>';
        var compile = $interpolate(tpl);
        expect(typeof compile).toEqual('function');
        compile.should.be.a('function');
    });

    it('should return a compiled template', function () {
        var tpl = '<b>{{name}}</b>';
        var compile = $interpolate(tpl);
        var html = compile({name: 'pippo'});
        html.should.be.equal('<b>pippo</b>');
    });
});

describe('As a user I want to be able to access to BASE_URL constant', function () {
    it('should exist a full BASE_URL constant', function () {
        BASE_URL.should.be.equal('http://localhost');
    });
});

describe('As a user I want to be able to user the myCtrl controller', function () {
    it('should have a name into the scope', function () {
        var scope = $rootScope.$new();
        var myCtrl = $controller('myCtrl', {$scope: scope});

        scope.should.have.property('name', 'pippo');
    });

    it('should change the name into the scope', function () {
        var scope = $rootScope.$new();
        var myCtrl = $controller('myCtrl', {$scope: scope});

        scope.should.have.property('name', 'pippo');
        scope.set('bar');
        scope.should.have.property('name', 'bar');
    });
});

describe('Stica', function () {
    it('sh*t', function (done) {
        $http.get('http://www.google.it:8080/lol.json')
            .then(function () {
                expect(response).toBeUndefined();
                done();
            }, function (err) {
                expect(err).toBeDefined();
                done();
            });
    });
});