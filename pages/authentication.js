const { I } = inject();

module.exports = {
  authenticationLink:
    "http://automationpractice.com/index.php?controller=authentication&back=my-account",
  createAccountEmailInput: { css: "#email_create" },
  createAccountBtn: { css: "#SubmitCreate" },
  alreadyRegisteredEmailInput: { css: "#email" },
  alreadyRegisteredPasswdInput: { css: "#passwd" },
  submitLoginBtn: { css: "#SubmitLogin" },

  openAuthentication() {
    I.amOnPage(this.authenticationLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.createAccountEmailInput);
  },

  fillCreateAccountEmailInput(email) {
    this.waitForPageLoad();
    I.fillField(this.createAccountEmailInput, email);
  },

  clickCreateAccountBtn() {
    I.click(this.createAccountBtn);
  },

  waitForPageLoad2() {
    I.waitForVisible(this.alreadyRegisteredEmailInput);
    I.waitForVisible(this.alreadyRegisteredPasswdInput);
  },

  fillAlreadyRegisteredEmailInput(email) {
    this.waitForPageLoad2();
    I.fillField(this.alreadyRegisteredEmailInput, email);
  },

  fillAlreadyRegisteredPasswdInput(password) {
    I.fillField(this.alreadyRegisteredPasswdInput, password);
  },

  clickSubmitLoginBtn() {
    I.click(this.submitLoginBtn);
  },
};
