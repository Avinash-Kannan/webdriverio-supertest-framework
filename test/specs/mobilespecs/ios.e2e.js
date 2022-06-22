const iOSPage = require('../../pageobjects/mobilepages/iOS.page');

describe('Comute sum of two integers using iOS App', () => {
    it('should compute and display sum of two integers', async () => {
        await iOSPage.enterIntegerA();
        await iOSPage.enterIntegerB();
        await iOSPage.calculateSum();
    });
    
});