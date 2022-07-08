class WebFlow {

    async FinishBtn(selector) {
        await $(selector).click();
    }

    async getText(selector) {
        const element= await $(selector);
        const attributeValue =(await element.getText());
        return await attributeValue;

    }

    async setValue(selector, value) {

        await $(selector).setValue(value);
    }
  
  };
module.exports =  WebFlow;