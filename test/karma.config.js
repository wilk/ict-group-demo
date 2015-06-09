module.exports = function (config) {
    config.set({
        basePath: '../',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app.js',
            'test/unit/**/*.js'
        ],

        frameworks: ['jasmine', 'chai'],

        browsers: ['PhantomJS', 'Chrome_without_security'],

        customLaunchers: {
            Chrome_without_security: {
                base: 'PhantomJS',
                flags: ['--disable-web-security']
            }
        },

        singleRun: true,
        autoWatch: false,

        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-mocha-reporter',
            'karma-chai-plugins'
        ],

        // reporters configuration
        reporters: ['mocha']
    });
};