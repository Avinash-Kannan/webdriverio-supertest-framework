const expect = require('chai').expect;
const FlowManager = require('../flow/FlowManager');
  
class BasePage {
  
    async verifyElementText(selector, expectedResult) {

            const element= await $(selector);
            const attributeValue = await (await FlowManager.getInstance()).getText(selector);
            expect(attributeValue).contains(expectedResult);
        
        }

    async visualRegression(tagName) {
        var percent;
        await browser.pause(5000);
        if(driver.isMobile)
        {
            if(driver.isIOS) {
            percent = await browser.compareScreen(tagName);
            expect(percent.misMatchPercentage).to.equal(0);
            }
        } else 
        {
            await expect(await browser.checkScreen(tagName)).to.equal(0);
        }

     };
  
  };
module.exports = new BasePage();