module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
	  .end();
  },
  'Search ebay keyword' : function (browser) {
    browser
      .url('http://www.ebay.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', ['iphone6', browser.Keys.ENTER])
      .pause(1000)

	  .end();
  }
};