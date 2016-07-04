var creds = require("../creds.js");

module.exports = {
  "Email sending" : function (browser) {
    browser
      .url('https://www.google.com/intl/en/mail/help/about.html')
      .waitForElementVisible('body', 1000)
      .click('a#gmail-sign-in')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .setValue('input[type=Email]', creds.u1.email1)
      .click('input[id=next]')
      .pause(1000)
      .setValue('input[id=Passwd]', creds.u1.password1)
      .click('input[id=signIn]')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .click('.T-I.J-J5-Ji.T-I-KE.L3')
      .pause(3000)
      .setValue('textarea[name=to]', creds.u2.email2)
      .setValue('input[name=subjectbox]', 'hi there')
      .click(".IZ .J-J5-Ji[role='button']")
      .pause(2000)
      //rceiving email
      .url('https://mail.yahoo.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=username]', creds.u2.email2)
      .click('button[id=login-signin')
      .pause(1000)
      .setValue('input[id=login-passwd]', creds.u2.password2)
      .click('button[id=login-signin')
      .pause(1000)
      .assert.attributeContains(".list-view-item-container.ml-bg .from.bold", 'title', creds.u1.email1)
      .assert.attributeContains(".list-view-item-container.ml-bg .subject.bold", 'title', "hi there")
      .end();
    }
};
