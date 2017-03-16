/*jslint node: true*/
import { browser } from 'protractor';
//import { reporter } from 'cucumber-html-reporter';
import * as fs from 'fs';

export = function () {

    this.registerHandler('BeforeFeature', { timeout: 10 * 1000 }, (event: any) => {
        return browser.get(browser.baseUrl);
    });

    // this.After((scenario, done) => {
    //     var reporter = require('cucumber-html-reporter');
    //     var options = {
    //         theme: 'bootstrap',
    //         jsonFile: 'report.json',
    //         output: 'report.html',
    //         reportSuiteAsScenarios: true,
    //         launchReport: true,
    //         metadata: {
    //             "App Version": "0.3.2",
    //             "Test Environment": "STAGING",
    //             "Browser": "Chrome  54.0.2840.98",
    //             "Platform": "Windows 10",
    //             "Parallel": "Scenarios",
    //             "Executed": "Remote"
    //         }
    //     };
    //     reporter.generate(options);

    // });
}