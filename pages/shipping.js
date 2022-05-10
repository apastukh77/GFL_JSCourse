const { I } = inject();

module.exports = {
  shippingLink: "http://automationpractice.com/index.php?controller=order",
  proceedToCheckoutBtn: {
    xpath: `//form[@id="form"]/p/button[@name='processCarrier']`,
  },
  agreeCheckBox: { css: "#cgv" },
  visiblePage: {
    xpath: `//div['@class=breadcrumb clearfix']/span[text()='Shipping']`,
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
    I.waitForVisible(this.visiblePage);
  },
};
