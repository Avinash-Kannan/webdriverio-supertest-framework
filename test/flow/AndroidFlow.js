const MobileGestures= require('../utils/MobileGestures');
class AndroidFlow {

    async FinishBtn(selector) {
        MobileGestures.SwipeUp();
        await $(selector).click();
    }

    async getText(selector) {
        const element= await $(selector);
        const attributeValue = await element.getAttribute('text');
        return attributeValue;

    }
  
  };
  module.exports =  AndroidFlow;