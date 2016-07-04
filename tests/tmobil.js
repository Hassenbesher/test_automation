var creds= require("../creds.js");
module.exports={

'tmobile':function(browser){
browser
.url("https://account.t-mobile.com/")
.waitForElementVisible('body',4000)
.setValue("input[id=username]",creds.T.username)
.pause(4000)
.setValue("input[id=password]",creds.T.password)
.pause(3000)
.click(".btn.btn-primary.login-btn.pt50")
.pause(10000)
//.click("button[id=pay_now]")
//.pause(5000)
//.click("input[id=radio-mini-1]")
.pause(6000)
//un comment the following code if using new card
//.click("input[id=new-credit]")
//.setValue("input[id=card-name]",creds.card.names)
//.setValue("input[id=card-number]",creds.card.number)
//.setValue("select[id=expire-month]",creds.card.expiremonth)
//.pause(2000)
//.setValue("select[id=expire-year]",creds.card.expireyear)
//.setValue("input[id=card-secu-code]",creds.card.cvv)
//.setValue("input[id=card-zipcode]",creds.card.zipcode)

// .pause(3000)
// .click("button[id=cc-next]")
// .pause(5000)
// .click("input[id=paymentreviewcredit]")
// .pause(3000)
// .click("button[id=custSubBtn]")

.click("a[id=logout-Ok]")





}
};
