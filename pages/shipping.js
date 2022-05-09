const { I } = inject();

module.exports = {
  shippingLink: "http://automationpractice.com/index.php?controller=order",
  proceedToCheckoutBtn: {
    xpath: `//form[@id="form"]/p/button[@name='processCarrier']`,
  },
  agreeCheckBox: { css: "#cgv" },
  visibleNextPage: {
    xpath: `//div['@class=row']/div['#center_column']/h1[text()='Please choose your payment method']`,
  },

  openShippingLink() {
    I.amOnPage(this.shippingLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.proceedToCheckoutBtn);
  },

  checkAgreeCheckBox() {
    this.waitForPageLoad();
    I.click(this.agreeCheckBox);
  },

  clickProceedToCheckoutBtn() {
    I.click(this.proceedToCheckoutBtn);
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visibleNextPage);
  },
};
