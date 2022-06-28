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
        ios: '//XCUIElementTypeOther[@name=" Back"]',
      },

};

const CommonLocators ={
    loginBtn : '~login',
      };

class LoginPage {

    async ClickLoginBtn() {
       await $(CommonLocators.loginBtn).click();
    }

    async ClicknativeViewOption() {
       await $(Locators.nativeViewOption).click();
     }

    async ClickBackBtn() {
      await $(Locators.backBtn).click();
     }

};
module.exports = new LoginPage();