const { I } = inject();

module.exports = {
  shoppingCartSummaryLink:
    "http://automationpractice.com/index.php?controller=order",
  proceedToCheckoutBtn: { xpath: '//*[@id="center_column"]/p[2]/a[1]' },

  openShoppingCartSummaryLink() {
    I.amOnPage(this.shoppingCartSummaryLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.proceedToCheckoutBtn);
  },

  clickProceedToCheckoutBtn() {
    this.waitForPageLoad();
    I.click(this.proceedToCheckoutBtn);
  },

  checkPageIsVisible(){
    I.retry().waitForVisible({ xpath: `//*[text()='Addresses']` });
  }

};
