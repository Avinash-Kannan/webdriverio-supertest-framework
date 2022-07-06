const testData = require('../utils/test-data.json');
const BasePage = require('./BasePage');
const MobileGestures= require('../utils/MobileGestures');

// let runner = MobileFlow | WebFlow;

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
    orderSuccessMsg : {
        android: '//android.widget.ScrollView[@content-desc="test-CHECKOUT: COMPLETE!"]/android.view.ViewGroup/android.widget.TextView[1]',
        ios :'~THANK YOU FOR YOU ORDER',
        web : '.complete-header',
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

  async CheckoutProduct() {
    await this.enterFirstName();
    await this.enterLastName();
    await this.enterZipCode();
    await this.ClickonContinueBtn();
    if(driver.isMobile)
    {
    MobileGestures.SwipeUp();
    }
    await $(Locators.btnFinish).click();
    // runner = await FlowManager.getInstance();
    // await runner.FinishBtn(Locators.btnFinish);
    
 }

 async ShouldHaveSuccessMsg() {
    await BasePage.verifyElementText(Locators.orderSuccessMsg,testData.orderSuccess, (driver.isIOS) ? 'name' : 'text');
 }

};
module.exports = new CheckoutPage();