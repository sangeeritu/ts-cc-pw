const { I } = inject();
import { inventoryPageLocators, checkoutPageLocators } from '../locators';

const inventoryPage = {
  testMethod: (msg: string) => {
    console.log(msg);
  },
  async addItemToCart(item: string) {
    await I.click(item);
  },
  goToCart() {
    I.click(inventoryPageLocators.goToCartButton);
  },
};

export = inventoryPage;
