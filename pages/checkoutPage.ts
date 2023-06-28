const { I } = inject();
import { checkoutPageLocators,cartPageLocators } from '../locators';

const checkoutPage = {
  testMethod: (msg: string) => {
    console.log(msg);
  },
  enterShippingInfo(firstName: string, lastName: string, zipCode: string) {
    I.fillField(checkoutPageLocators.firstNameInput, firstName);
    I.fillField(checkoutPageLocators.lastNameInput, lastName);
    I.fillField(checkoutPageLocators.zipCodeInput, zipCode);
    I.click(checkoutPageLocators.continueButton);
  },
  goToCheckout() {
    I.click(cartPageLocators.checkoutButton);
  },
  completeOrder() {
    I.click(checkoutPageLocators.finishButton);
  },
};

export = checkoutPage;