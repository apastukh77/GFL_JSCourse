const { I } = inject();

module.exports = {
  orderSummaryLink:
    "http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment",
  confirmMyOrderBtn: { xpath: '//*[@id="cart_navigation"]/button' },

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

  checkPageIsVisible(){
    I.retry().waitForVisible({ xpath: `//*[text()='Order confirmation']` });
  }



};
