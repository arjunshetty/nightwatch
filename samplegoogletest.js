module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 3000)
      .click('button[name=btnk]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
	  .end();
  },
  'Search google keyword' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'ebay')
      .waitForElementVisible('button[name=btnG]', 3000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'ebay')
	  .end();
  },
  'Search another keyword' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'netflix')
      .waitForElementVisible('button[name=btnG]', 3000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'netflix')
	  .end();
	  }
};