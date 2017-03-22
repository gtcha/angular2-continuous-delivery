// FIRST TIME ONLY- run:
//   ./node_modules/.bin/webdriver-manager update
//
//   Try: `npm run webdriver:update`
//
// AND THEN EVERYTIME ...
//   1. Compile with `tsc`
//   2. Make sure the test server (e.g., lite-server: localhost:8080) is running.
//   3. ./node_modules/.bin/protractor protractor.config.js
//
//   To do all steps, try:  `npm run e2e`

"use strict";
var protractor_1 = require('protractor');
var fs = require('fs');
var path = require('canonical-path');
var _ = require('lodash');


exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'custom',
  // serenity-js generates nice reports, not using the ScreenPlay pattern for implementation
  frameworkPath: require.resolve('serenity-js'),
  specs: [
    'e2e/features/*.feature'
  ],

  // For angular tests
  useAllAngular2AppRoots: true,
  // Base URL for application server
  baseUrl: 'http://localhost:8080',

  cucumberOpts: {
    require: ['e2e/steps/*.js', 'e2e/support/*.js'],
    format: 'json:results.json',

  },
};
