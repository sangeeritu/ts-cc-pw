const { loginPage, I } = inject()

export = {
  goToHome: () => {
    I.amOnPage('/')
    loginPage.testMethod('From Login Page')
  }
}