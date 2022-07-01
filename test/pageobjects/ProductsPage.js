const Locators ={
    btnAddtoCart: {
      android: '(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]',
      ios: '(//XCUIElementTypeOther[@name="test-ADD TO CART"])[1]',
      web: '#add-to-cart-sauce-labs-backpack'
    },

    iconCart: {
        android: '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView',
        ios: '//XCUIElementTypeOther[@name="test-Cart"]/XCUIElementTypeOther',
        web: '#shopping_cart_container'
      },
};


class ProductsPage {

  async addProducttoCart() {
    await $(Locators.btnAddtoCart).click();
    
  }

  async clickOnCartIcon() {
    await $(Locators.iconCart).click();
  }

};
module.exports = new ProductsPage();