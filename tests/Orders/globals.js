var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	// True or False.  If true the generated html will be opened
    // in the browser after the test run.
    openBrowser: false,

    // The directory where report should be saved
    reportsDirectory: './results',

    // The filename that the html report will be saved as
    reportFilename: 'integration-tests-report.html',

    // The theme that will be used to generate the html report
	// This should match a directory under the lib/themes directory
	// default, cover, outlook
    themeName: 'default',

    // If true then only errors will be shown in the report
    hideSuccess: false
});
module.exports = {
	
	// default timeout value in milliseconds for waitFor commands and implicit waitFor 
	// value for expect assertions
	waitForConditionTimeout: 2000,

	// default time to wait for pages to laod
	waitForPageLoad: 5000,

	// External HTML reporter
	reporter: reporter.fn,

	// default (dev) global config
	'default': {
		comments: 'awesome product',

	  	urls: {
	    	login: ''
		},

    },

    'qa': {
		waitForConditionTimeout: 3000,
		waitForPageLoad: 10000,
	  	urls: {
	    	login: 'https://signin.qa.ebay.com/ws/eBayISAPI.dll?SignIn',
	    	shord: 'https://www.qa.ebay.com/sh/ord'
		},
        userid: 'arjun_ord_seller1',
        password: 'password',

	},

}