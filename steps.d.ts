/// <reference types='codeceptjs' />
type loginPage = typeof import('./pages/loginPage');
type homePage = typeof import('./pages/homePage');
type checkoutPage = typeof import('./pages/checkoutPage');
type inventoryPage = typeof import('./pages/inventoryPage');
type CustomHelper = import('./CustomHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, loginPage: loginPage, homePage: homePage,checkoutPage:checkoutPage,inventoryPage:inventoryPage }
  interface Methods extends Playwright, CustomHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
