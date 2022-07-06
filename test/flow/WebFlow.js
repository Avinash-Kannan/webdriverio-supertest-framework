class WebFlow {

    async FinishBtn(selector) {
        await $(selector).click();
    }

    async getText(selector) {
        const element= await $(selector);
        const attributeValue =(await element.getText());
        return await attributeValue;

    }
  
  };
module.exports =  WebFlow;