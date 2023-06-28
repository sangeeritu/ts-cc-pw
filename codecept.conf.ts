require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');
const { bootstrap } = require('./presettings.ts');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/**_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com',
      show: true,
      windowSize: '1200x900',
      browser: 'chromium'
    },
    CustomHelper: {
      require: './CustomHelper.ts'
    }
  },
  bootstrap,
  include: {
    loginPage: './pages/loginPage.ts',
    homePage: './pages/homePage.ts',
    inventoryPage: './pages/inventoryPage.ts',
    checkoutPage:'./pages/checkoutPage.ts'
  },
  name: 'ts-cc-pw',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}