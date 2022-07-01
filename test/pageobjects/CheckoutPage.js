const MobileGestures= require('../utils/MobileGestures');
const Locators ={
    btnContinue : {
        android: '~test-CONTINUE',
        ios :'~test-CONTINUE',
        web : '#continue',
        },
    btnFinish : {
        android: '~test-FINISH',
        ios :'~test-FINISH',
        web : '#finish',
        },
    firstName : {
        android: '~test-First Name',
        ios :'~test-First Name',
        web : '#first-name',
        },
    lastName : {
        android: '~test-Last Name',
        ios :'~test-Last Name',
        web : '#last-name',
        },
    zipCode : {
        android: '~test-Zip/Postal Code',
        ios :'~test-Zip/Postal Code',
        web : '#postal-code',
        },
};

class CheckoutPage {

  async enterFirstName() {
    await $(Locators.firstName).setValue('First');
  }

  async enterLastName() {
    await $(Locators.lastName).setValue('Last');
  }

  async enterZipCode() {
    !(driver.isMobile) ? await $(Locators.zipCode).setValue('007') : await $(Locators.zipCode).setValue('007\n') ;
  }

  async ClickonContinueBtn() {
     await $(Locators.btnContinue).click();
     await browser.pause(2000); 
  }

  async ClickonFinishBtn() {

    if(driver.isMobile)
    {
    MobileGestures.SwipeUp();
    }
    await $(Locators.btnFinish).click();
 }

};
module.exports = new CheckoutPage();