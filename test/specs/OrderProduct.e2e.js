const LoginPage = require('../pageobjects/LoginPage');
const CartPage = require('../pageobjects/CartPage');
const ProductsPage = require('../pageobjects/ProductsPage');
const CheckoutPage = require('../pageobjects/CheckoutPage');
const expect = require('chai').expect;


describe('Order Product from Swag labs', () => {
    
    it('regression smoke : should be able to order product', async () => {

       await LoginPage.enterUsername();
       await LoginPage.enterPassword();
       await LoginPage.ClickLoginBtn();
       await ProductsPage.addProducttoCart();
       await ProductsPage.clickOnCartIcon();
       await CartPage.clickOnCheckoutBtn();
       await CheckoutPage.enterFirstName();
       await CheckoutPage.enterLastName();
       await CheckoutPage.enterZipCode();
       await CheckoutPage.ClickonContinueBtn();
       await CheckoutPage.ClickonFinishBtn();
        
    });

});
