const { I } = inject();

module.exports = {
  orderSummaryLink:
    "http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment",
  confirmMyOrderBtn: {
    xpath: `//button[@class='button btn btn-default button-medium']`,
  },
  visibleNextPage: {
    xpath: `//div[@class='breadcrumb clearfix']/span[text()='Order confirmation']`,
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
    I.waitForVisible(this.visibleNextPage);
  },
};
