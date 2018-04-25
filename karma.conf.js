module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'src/*.js',
      'spec/*.js',
      'spec/helpers/SpecHelper.js'
    ],

    exclude: [

    ],

    preprocessors: {
      'src/*.js': ['coverage']
    },

    reporters: ['spec', 'coverage'],

    specReporter: {
      maxLogLines: 5,             // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: true,      // do not print information about skipped tests
      showSpecTiming: false,      // print the time elapsed for each spec
      failFast: true              // test would finish with error when a first fail occurs.
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: true,

    concurrency: Infinity
  });
};
