const testData = require('../utils/test-data.json');
const BasePage = require('./BasePage');

const Locators ={
  btnCheckout : {
    android: '~test-CHECKOUT',
    ios :'~test-CHECKOUT',
    web: '#checkout',
  },

  cartItemName : {
    android: '//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[1]',
    ios :'//XCUIElementTypeStaticText[@name="Sauce Labs Backpack"]',
    web: '.inventory_item_name',
  }

};

class CartPage {

  async ProceedToCheckout() {
     await BasePage.verifyElementText(Locators.cartItemName,testData.productName);
     await $(Locators.btnCheckout).click();
  }

};
// export default CartPage;
module.exports = new CartPage();