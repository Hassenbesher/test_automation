var email1 = require("../creds").email1;
var password1 =require("../creds").password1;
var email2 = require("../creds").email2;
var password2=require("../creds").password2;



module.exports = {
  'email_test' : function (browser) {
    browser
      .url("https://www.google.com/")
      .waitForElementVisible('body', 1000)
      .click("a[id=gb_70]")
      .pause(1000)
      .setValue("input[id=Email]", email1)
      .click("input[id=next]")
      .pause(2000)
      .setValue("input[id=Passwd]", password1)
      .click("input[id=signIn]")
      .pause(2000)
      .click("a.gb_P")
      .pause(4000)
      .waitForElementVisible('body',1000)
      .click('.T-I.J-J5-Ji.T-I-KE.L3')
      .pause(4000)





    },
    "Recivers":function (browser){
      browser
      .url("https://www.yahoo.com/")
      .waitForElementVisible('body',1000)
      .click("a#uh-signin")
      .pause(2000)
      .setValue("input[id=login-username]",email2)
      .pause(1000)
      .click("button#login-signin.pure-u-1.pure-button.mbr-button-primary")
      .pause(1000)
      .setValue("input[id=login-passwd]",password2)
      .pause(1000)
      .click("button#login-signin.pure-u-1.pure-button.mbr-button-primary")
      .pause(2000)
      .click("a[id=yui_3_18_0_5_1464420061938_1028]")
      .pause(1000)




    }
  };
