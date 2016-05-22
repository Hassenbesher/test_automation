var email = require("../crede").email
var password=require("../crede").password



module.exports = {
  'email_test' : function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible('body', 1000)
      .click("a[id=gb_70]")
      .setValue("input[id=Email]", email)
      .click("input[id=next]")
      .pause(1000)
      .setValue("input[id=Passwd]", password)
      .click("input[id=signIn]")
      .pause(1000)
      .click("a.gb_P")
    }
  };
