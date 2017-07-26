module.exports = {
  'awaiting shipment' : function (browser) {
        var globals = browser.globals;
        
        
        var create = browser.page.awaitingshipment();
        create.navigateAndLogin(globals.qa.urls.login, globals.qa.userid, globals.qa.password);
        browser.saveScreenshot('./results/chrome/login.png')
        create.navigateToAwaitingOrder(globals.qa.urls.shord);
        browser.saveScreenshot('./results/chrome/manageorders.png')

        // call .end() to end each test/selenium session
        browser.end();

  },
 
};