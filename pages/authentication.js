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

  fillCreateAccountEmailInput(email) {
    I.waitForVisible(this.createAccountEmailInput);
    I.fillField(this.createAccountEmailInput, email);
  },

  clickCreateAccountBtn() {
    I.click(this.createAccountBtn);
  },

  fillAlreadyRegisteredEmailInput(email) {
    I.waitForVisible(this.alreadyRegisteredEmailInput);
    I.fillField(this.alreadyRegisteredEmailInput, email);
  },

  fillAlreadyRegisteredPasswdInput(password) {
    I.waitForVisible(this.alreadyRegisteredPasswdInput);
    I.fillField(this.alreadyRegisteredPasswdInput, password);
  },

  clickSubmitLoginBtn() {
    I.click(this.submitLoginBtn);
  },
};
