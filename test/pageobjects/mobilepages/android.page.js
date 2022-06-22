const Locators ={
    Preference:  "//android.widget.TextView[@text='Preference']",
    Dependency:  "//android.widget.TextView[@text='3. Preference dependencies']",
    checkboxWiFi: "android.widget.CheckBox"
};

class AndroidPage {

    async clickPreferencesBtn() {
       await $(Locators.Preference).click();
    }

    async clickDependencyBtn() {
       await $(Locators.Dependency).click();
     }

    async clickcheckboxWiFi() {
      await $(Locators.checkboxWiFi).click();
     }

};
module.exports = new AndroidPage();