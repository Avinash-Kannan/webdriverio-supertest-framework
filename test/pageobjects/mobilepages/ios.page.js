const Locators ={
    IntegerA:  "//XCUIElementTypeTextField[@name='IntegerA']",
    IntegerB:  "//XCUIElementTypeTextField[@name='IntegerB']",
    ComputeSum: "//XCUIElementTypeStaticText[@name='Compute Sum']"
};

class iOSPage {

    async enterIntegerA() {
       await $(Locators.IntegerA).setValue('3');
    }

    async enterIntegerB() {
       await $(Locators.IntegerB).setValue('5');
     }

    async calculateSum() {
      await $(Locators.ComputeSum).click();
     }

};
module.exports = new iOSPage();