const { I } = inject();

module.exports = {
  shoppingCartSummaryLink:
    "http://automationpractice.com/index.php?controller=order",
    
  price: { css: "#total_product" },

  proceedToCheckoutBtn: {
    xpath: `//div[@id="center_column"]/p[@class='cart_navigation clearfix']/a[@title='Proceed to checkout']`,
  },
  visibleNextPage: {
    xpath: `//div/h1['@class=cart_title,text()=Shopping-cart summary']`,
  },

  openShoppingCartSummaryLink() {
    I.amOnPage(this.shoppingCartSummaryLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.proceedToCheckoutBtn);
  },

  async getPriceOnShoppingCartPage() {
    this.waitForPageLoad();
    return await I.retry().grabTextFrom(this.price);
  },

  clickProceedToCheckoutBtn() {
    I.click(this.proceedToCheckoutBtn);
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visibleNextPage);
  },
};
