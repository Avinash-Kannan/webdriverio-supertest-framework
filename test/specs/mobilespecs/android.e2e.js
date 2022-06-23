const AndroidPage = require('../../pageobjects/mobilepages/android.page');

describe('Click Wifi checkbox from Android App', () => {
    it('smoke : should click on Wifi checkbox', async () => {
        await AndroidPage.clickPreferencesBtn();
        await AndroidPage.clickDependencyBtn();
        await AndroidPage.clickcheckboxWiFi();
    });

    it('regression : should uncheck Wifi checkbox', async () => {
        await AndroidPage.clickPreferencesBtn();
        await AndroidPage.clickDependencyBtn();
        await AndroidPage.clickcheckboxWiFi();
        await AndroidPage.clickcheckboxWiFi();
    });
    
});