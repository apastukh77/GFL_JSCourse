const { I } = inject();

module.exports = {
  paymentMethodLink:
    "http://automationpractice.com/index.php?controller=order&multi-shipping=",
  payByBankWireBtn: {
    xpath: `//div[@id="HOOK_PAYMENT"]/div[@class='row']/div/p/a[@class='bankwire']`,
  },
  visibleNextPage: {
    xpath: `//div['#center_column']/h1['@class=page-heading, text()=Order summary']`,
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
    I.waitForVisible(this.visibleNextPage);
  },
};
