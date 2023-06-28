const { I } = inject()
import { loginPageLocators } from '../locators';

export = {
  testMethod: (msg: string) => {
    console.log(msg)
  },
  testFillDetails(username: string, password: string) {
    I.fillField(loginPageLocators.usernameInput, username);
    I.fillField(loginPageLocators.passwordInput, password);
  },

  async link () {
   // await I.waitForVisible(loginPageLocators.loginButton)
    await I.click(loginPageLocators.loginButton)
  }
}