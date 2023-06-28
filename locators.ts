// loginPageLocators.ts
export const loginPageLocators = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
  };
  
  // inventoryPageLocators.ts
  export const inventoryPageLocators = {
    addToCartButton: (index: number) => `#add-to-cart-${index}`,
    goToCartButton: '#shopping_cart_container',
  };
  
  // checkoutPageLocators.ts
  export const checkoutPageLocators = {
    firstNameInput: '#first-name',
    lastNameInput: '#last-name',
    zipCodeInput: '#postal-code',
    continueButton: '#continue',
    cardNumberInput: '#card-number',
    expirationDateInput: '#expiration-date',
    cvvInput: '#cvv',
    finishButton: '#finish',
  };

  export const cartPageLocators = {
    checkoutButton: '#checkout',
  };
  