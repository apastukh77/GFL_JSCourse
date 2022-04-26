/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authenticationPage = typeof import('./pages/authentication.js');
type createAccountPage = typeof import('./pages/createAccount.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authenticationPage: authenticationPage, createAccountPage: createAccountPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
