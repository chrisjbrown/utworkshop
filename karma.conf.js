const rules = require('./webpack/rules');
const webpack = require('./webpack.config.js');

process.env.TEST = true;

module.exports = (config) => {
    config.set({
        frameworks: [
            'source-map-support',
            'jasmine',
            'sinon',
        ],

        plugins: [
            'karma-jasmine',
            'karma-sinon',
            'karma-webpack',
            'karma-coverage',
            'karma-coverage-istanbul-reporter',
            'karma-source-map-support',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-html2js-preprocessor',
        ],

        files: [
            './src/tests.entry.js',
        ],

        preprocessors: {
            './src/tests.entry.js': [
                'webpack',
                'sourcemap',
            ],
        },

        // override normal webpack config
        webpack: {
            devtool: 'inline-source-map',
            module: {
                rules: [
                    rules.css,
                    rules.js
                ],
            },
            context: webpack.context,
            resolve: webpack.resolve,
            plugins: webpack.plugins,
            externals: webpack.externals,
        },

        webpackMiddleware: {
            stats: 'errors-only',
        },

        // config reporters for coverage only if in singlerun mode
        reporters: ['spec', 'junit']
        .concat(config.singleRun ? ['coverage-istanbul'] : []),

        junitReporter: {
            outputDir: 'reports/surefire-reports/',
            useBrowserName: false,
        },

        html2JsPreprocessor: {
            moduleName: 'utworkshop',
        },

        coverageIstanbulReporter: {
            fixWebpackSourcePaths: true,
            dir: 'reports/coverage',
            reports: ['lcov', 'text-summary'],
        },

        port: 9999,
        colors: true,
        logLevel: config.singleRun ? config.LOG_INFO : config.LOG_DEBUG,
        autoWatch: true,
        captureTimeout: 6000,
    });
};