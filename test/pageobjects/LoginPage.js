const Locators ={
    loginBtn: {
      android: '~test-LOGIN',
      ios: '~test-LOGIN',
      web: '#login-button',
    },

    username: {
        android: '~test-Username',
        ios: '~test-Username',
        web: '#user-name',
      },

    password: {
        android: '~test-Password',
        ios: '~test-Password',
        web: '//*[@placeholder="Password"]',
      },
};

class LoginPage {

  async enterUsername() {
    await $(Locators.username).setValue('standard_user');
  }

  async enterPassword() {
    await $(Locators.password).setValue('secret_sauce');
  }

  async ClickLoginBtn() {
     await $(Locators.loginBtn).click();
  }

};
module.exports = new LoginPage();