const { I } = inject();

module.exports = {
  orderSummaryLink:
    "http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment",
  confirmMyOrderBtn: {
    xpath: `//button[@class='button btn btn-default button-medium']`,
  },
  visiblePage: {
    xpath: `//div['#center_column']/h1['@class=page-heading, text()=Order summary']`,
  },

  openOrderSummaryLink() {
    I.amOnPage(this.shoppingCartSummaryLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.confirmMyOrderBtn);
  },

  clickConfirmMyOrderBtn() {
    this.waitForPageLoad();
    I.click(this.confirmMyOrderBtn);
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visiblePage);
  },
};
