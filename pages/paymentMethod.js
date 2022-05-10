const { I } = inject();

module.exports = {
  paymentMethodLink:
    "http://automationpractice.com/index.php?controller=order&multi-shipping=",
  payByBankWireBtn: {
    xpath: `//div[@id="HOOK_PAYMENT"]/div[@class='row']/div/p/a[@class='bankwire']`,
  },
  visiblePage: {
    xpath: `//div['@class=row']/div['#center_column']/h1[text()='Please choose your payment method']`,
  },

  openPaymentMethodLink() {
    I.amOnPage(this.paymentMethodLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.payByBankWireBtn);
  },

  clickPayByBankWireBtn() {
    this.waitForPageLoad();
    I.click(this.payByBankWireBtn);
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visiblePage);
  },
};
