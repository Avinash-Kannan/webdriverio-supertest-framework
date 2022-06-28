const LoginPage = require('../../pageobjects/mobilepages/login.page');

describe('Click Native View Option from Mobile App', () => {
    it('regression smoke : should click Native View Option', async () => {
        await LoginPage.ClickLoginBtn();
        await LoginPage.ClicknativeViewOption();
        await LoginPage.ClickBackBtn();
    });
    
});