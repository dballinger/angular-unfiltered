module.exports = function (config) {
    config.set({

        basePath: '../../',

        files: [
            'app/lib/jquery-1.7.2.min.js',
            'app/lib/angular/ui-bootstrap-0.5.0.js',
            'app/lib/underscore-1.3.3.js',
            'app/lib/underscore-extensions.js',
            'app/lib/moment-2.0.0-min.js',
            'js-test/util/scenario-util.js',
            'js-test/e2e/*.js'
        ],

        autoWatch: false,

        singleRun: true,

        browsers: ['Chrome'],

        frameworks: ['ng-scenario'],

        proxies: {
            '/': 'http://localhost:8080/golfr/'
        },

        reporters: ['junit'],

        junitReporter: {
            outputFile: 'build/reports/e2e.xml',
            suite: 'e2e'
        },

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-scenario'
        ]

    })
}