const expect = require('chai').expect;
  
class BasePage {
  
    async verifyElementText(selector, expectedResult, attribute) {
        if(driver.isMobile){
            const element= await $(selector);
            const attributeValue = await element.getAttribute(attribute);
            expect(attributeValue).contains(expectedResult);
            
        } else{
            expect(await $(selector).getText()).contains(expectedResult);
        }
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