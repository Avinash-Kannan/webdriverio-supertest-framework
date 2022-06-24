const Locators ={
      nativeViewOption: {
        android: '//android.widget.TextView[@content-desc="chainedView"]',
        ios: '//XCUIElementTypeStaticText[@name="chainedView"]',
      },

      demoText :{
        android: '(//android.widget.TextView[@content-desc="textView"])[1]',
        ios: '(//XCUIElementTypeStaticText[@name="textView"])[1]',
      },

      backBtn: {
        android: '//android.widget.TextView[@text="Back"]',
        ios: '~Back',
      },

};

const CommonLocators ={
    loginBtn : '~login',
      };

class LoginPage {

    nativeViewOption = driver.isIOS ? Locators.nativeViewOption.ios : Locators.nativeViewOption.android;
    backBtn = driver.isIOS ? Locators.backBtn.ios : Locators.backBtn.android;
  

    async ClickLoginBtn() {
       await $(CommonLocators.loginBtn).click();
    }

    async ClicknativeViewOption() {
       await $(this.nativeViewOption).click();
     }

    async ClickBackBtn() {
      await $(this.backBtn).click();
     }

};
module.exports = new LoginPage();