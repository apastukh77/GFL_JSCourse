const { I } = inject();

module.exports = {
  authenticationLink:
    "http://automationpractice.com/index.php?controller=authentication&back=my-account",
  createAccountEmailInput: { css: "#email_create" },
  createAccountBtn: { css: "#SubmitCreate" },
  alreadyRegisteredEmailInput: { css: "#email" },
  alreadyRegisteredPasswdInput: { css: "#passwd" },
  submitLoginBtn: { css: "#SubmitLogin" },
  generateEmail: "",

  openAuthentication() {
    I.amOnPage(this.authenticationLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.createAccountEmailInput);
  },

  fillCreateAccountEmailInput(uniqueEmail) {
    this.waitForPageLoad();
    I.fillField(this.createAccountEmailInput, uniqueEmail);
  },

  clickCreateAccountBtn() {
    I.click(this.createAccountBtn);
  },

  waitForPageLoad2() {
    I.waitForVisible(this.alreadyRegisteredEmailInput);
    I.waitForVisible(this.alreadyRegisteredPasswdInput);
  },

  fillAlreadyRegisteredEmailInput(uniqueEmail) {
    this.waitForPageLoad2();
    I.fillField(this.alreadyRegisteredEmailInput, uniqueEmail);
  },

  fillAlreadyRegisteredPasswdInput(uniquePasswd) {
    I.fillField(this.alreadyRegisteredPasswdInput, uniquePasswd);
  },

  clickSubmitLoginBtn() {
    I.click(this.submitLoginBtn);
  }

};
