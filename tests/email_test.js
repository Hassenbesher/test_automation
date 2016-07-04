 var creds= require("../creds.js");
module.exports = {
  'email_test' : function (browser) {
     browser
       .url("https://www.gmail.com/")
       .waitForElementVisible('body', 1000)
       .setValue("input[id=Email]",creds.u1.email1)
       .click("input[id=next]")
       .pause(2000)
       .setValue("input[id=Passwd]", creds.u1.password1)
       .click("input[id=signIn]")
      // .click("a.gb_P")
       .pause(2000)      
       .waitForElementVisible('body',2000)
       .click(".T-I.J-J5-Ji.T-I-KE.L3")
       .pause(2000)
       .setValue("textarea[name=to]",creds.u2.email2)
       .setValue("input[name=subjectbox]",'how are u')
       .pause(2000)
       .click(".T-I.J-J5-Ji.aoO.T-I-atl.L3[role='button']")
       .pause(4000)
      //  .url("https://mail.yahoo.com/")
      //  .waitForElementVisible('body',1000)
      //  //.click("a[id=uh-signin]")
      //  .pause(2000)
      //  .setValue("input[id=login-username]",creds.u2.email2)
      //  .pause(1000)
      //  .click("button[id=login-signin]")
      //  .pause(1000)
      //  .setValue("input[id=login-passwd]",creds.u2.password2)
      //  .pause(1000)
      //  .click("button[id=login-signin]")
      //  .pause(1000)
      //  .assert.attributeContains(".list-view-item-container.ml-bg .from.bold", 'title', creds.u1.email1)
      //
     }
  };
