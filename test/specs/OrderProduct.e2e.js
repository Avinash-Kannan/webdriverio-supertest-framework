const LoginPage = require('../pageobjects/LoginPage');
const CartPage = require('../pageobjects/CartPage');
const ProductsPage = require('../pageobjects/ProductsPage');
const CheckoutPage = require('../pageobjects/CheckoutPage');


describe('Order Product from Swag labs', () => {
    
    it('regression smoke : should be able to order product', async () => {

       await LoginPage.Login();
       await ProductsPage.OrderProduct();
       await CartPage.ProceedToCheckout();
       await CheckoutPage.CheckoutProduct();
       await CheckoutPage.ShouldHaveSuccessMsg();
  
    });

});
