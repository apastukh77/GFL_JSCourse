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
    I.waitForVisible(this.visiblePage);
  },

  clickPayByBankWireBtn() {
    I.waitForVisible(this.payByBankWireBtn);
    I.click(this.payByBankWireBtn);
  },
};
