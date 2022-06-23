const LoginPage = require('../../pageobjects/webpages/login.page');
const SecurePage = require('../../pageobjects/webpages/secure.page');

describe('smoke e2e Parallel Test', () => {
    it('smoke  should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

});


