import { user, items, userDetails, paymentDetails } from "../usersData";

Feature('Login, Add to Cart, and Checkout');

Before(({ I, homePage, loginPage }) => {
  // Set up preconditions or state before each scenario
  homePage.goToHome();
  loginPage.testFillDetails(user.username, user.password);
  loginPage.link();
});

Scenario('Add item to cart and proceed to checkout', async ({ I, inventoryPage, checkoutPage }) => {
  inventoryPage.addItemToCart(items.index);
  inventoryPage.goToCart();
  checkoutPage.goToCheckout();
  checkoutPage.enterShippingInfo(userDetails.firstName, userDetails.lastName, userDetails.zipCode);
  checkoutPage.completeOrder();
});
