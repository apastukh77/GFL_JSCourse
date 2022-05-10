/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authenticationPage = typeof import('./pages/authentication.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type myAccountPage = typeof import('./pages/myAccount.js');
type openCatalogPage = typeof import('./pages/openCatalog.js');
type productPage = typeof import('./pages/product.js');
type shoppingCartSummaryPage = typeof import('./pages/shoppingCartSummary.js');
type step1Page = typeof import('./pages/step1.js');
type shippingPage = typeof import('./pages/shipping.js');
type paymentMethodPage = typeof import('./pages/paymentMethod.js');
type orderSummaryPage = typeof import('./pages/orderSummary.js');
type orderConfirmationPage = typeof import('./pages/orderConfirmation.js');
type user = typeof import('./userDate/user.js');
type helper = typeof import('./helper/helper.js');
type file_handler = typeof import('./helper/file_handler.js');
type email_password = typeof import('./email_password/email_password.txt');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authenticationPage: authenticationPage, createAccountPage: createAccountPage, myAccountPage: myAccountPage, openCatalogPage: openCatalogPage, productPage: productPage, shoppingCartSummaryPage: shoppingCartSummaryPage, step1Page: step1Page, shippingPage: shippingPage, paymentMethodPage: paymentMethodPage, orderSummaryPage: orderSummaryPage, orderConfirmationPage: orderConfirmationPage, user: user, helper: helper, file_handler: file_handler, email_password: email_password }
  interface Methods extends Playwright, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
