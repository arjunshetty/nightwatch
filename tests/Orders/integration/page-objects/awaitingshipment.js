var commands = {
    
        load: function (elementtocheck) {
        // this inside page objects point to a page or 
        // section (based on context its called from)
        this.api.pause(2000);

        // '@...' refers to elements defined below under 'elements'
        return this
            .waitForElementVisible(elementtocheck); 
    },


    login: function(email, password) {

        return this
            .assert.visible('@emailInput')
            .setValue('@emailInput', email)
            .setValue('@passInput', password)
            .waitForElementVisible('@loginButton')
            .click('@loginButton');
    },

    navigateAndLogin: function (url, email, password) {
         this
            .navigate(url) //convenience method for loading a url
            .load('@emailInput')
            .login(email, password);

        this.api.pause(5000);

        // return this
        //     .assert.containsText('@pageTitle', 'Create a new AB Test');
    },
     navigateToAwaitingOrder: function (url) {
        return this
            .navigate(url) //convenience method for loading a url
            //.load('@Awaitingmodule')
            .assert.containsText('.caHdr-hdr', 'Manage all orders'); 



      //  this.api.pause(5000);

        // return this
        //     .assert.containsText('@pageTitle', 'Create a new AB Test');
    },
      
};

module.exports = {

    elements: {
        
        emailInput: 'span>input[placeholder="Email, phone or username"]',
        passInput: 'span>input[placeholder="Password"]',
        loginButton: 'input[type="submit"]',
        Awaitingmodule: 'class="caHdr-hdr">Manage all orders'
    },
    commands: [commands]

};