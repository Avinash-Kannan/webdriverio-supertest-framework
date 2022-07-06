const BasePage = require('./BasePage');
const testData = require('../utils/test-data.json');
const expect = require('chai').expect;

const Locators ={
    btnAddtoCart: {
      android: '(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]',
      ios: '(//XCUIElementTypeOther[@name="test-ADD TO CART"])[1]',
      web: '#add-to-cart-sauce-labs-backpack'
    },

    iconCart: {
        android: '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView',
        ios: '(//XCUIElementTypeOther[@name="1"])[4]',
        web: '.shopping_cart_badge'
      },
};


class ProductsPage {

  async addProducttoCart() {
    await $(Locators.btnAddtoCart).click();
    await BasePage.verifyElementText(Locators.iconCart,testData.productCount);
  }

  async OrderProduct() {
    await this.addProducttoCart();
    await $(Locators.iconCart).click();
  }

};
module.exports = new ProductsPage();