const MobileGestures= require('../utils/MobileGestures');
class iOSFlow {

    async FinishBtn(selector) {
        MobileGestures.SwipeUp();
        await $(selector).click();
    }

    async getText(selector) {
        const element= await $(selector);
        const attributeValue = await element.getAttribute('name');
        return attributeValue;

    }

    async setValue(selector, value) {

        await $(selector).setValue(value+'\n');
    }
  
  };
  module.exports =  iOSFlow;