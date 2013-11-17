module.exports = function (config) {
    config.set({
        basePath: '../../',

        files: [
            'http://code.angularjs.org/1.2.1/angular.js',
            'http://code.angularjs.org/1.2.1/angular-mocks.js',
            'app/js/**/*.js',
            'js-test/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    })
}