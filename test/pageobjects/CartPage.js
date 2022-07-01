const Locators ={
  btnCheckout : {
    android: '~test-CHECKOUT',
    ios :'~test-CHECKOUT',
    web: '#checkout',
  }

    };

class CartPage {

  async clickOnCheckoutBtn() {
     await $(Locators.btnCheckout).click();
  }

};
module.exports = new CartPage();