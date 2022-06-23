const LoginPage = require('../../pageobjects/webpages/login.page');
const SecurePage = require('../../pageobjects/webpages/secure.page');

describe('regression e2e Open Amazon App', () => {
    it('regression should login with valid credentials', async () => {
        await browser.url(`https://www.amazon.in/`)
        LoginPage.openAmazon();
    });

});

