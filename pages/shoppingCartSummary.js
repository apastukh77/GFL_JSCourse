const { I } = inject();

module.exports = {
  shoppingCartSummaryLink:
    "http://automationpractice.com/index.php?controller=order",
  price: {css: "#total_product"},
  //price: {xpath: `//*[@id="product_price_1_1_683952"]/span`},
  proceedToCheckoutBtn: { xpath: '//*[@id="center_column"]/p[2]/a[1]' }, 
  
  openShoppingCartSummaryLink() {
    I.amOnPage(this.shoppingCartSummaryLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.proceedToCheckoutBtn);
  },

  async getPriceOnShoppingCart(){
    this.waitForPageLoad();
    return await I.retry().grabTextFrom(this.price);
  },

  clickProceedToCheckoutBtn() {
        I.click(this.proceedToCheckoutBtn);
  },

  checkPageIsVisible(){
    I.retry().waitForVisible({ xpath: `//*[text()='Addresses']` });
  }

};
