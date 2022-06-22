const AndroidPage = require('../../pageobjects/mobilepages/android.page');

describe('Click Wifi checkbox from Android App', () => {
    it('should click on Wifi checkbox', async () => {
        await AndroidPage.clickPreferencesBtn();
        await AndroidPage.clickDependencyBtn();
        await AndroidPage.clickcheckboxWiFi();
    });
    
});