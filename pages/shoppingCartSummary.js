const { I } = inject();

module.exports = {
  shoppingCartSummaryLink:
    "http://automationpractice.com/index.php?controller=order",
  price: { css: "#total_product" },
  //price: {xpath: `//*[@id="product_price_1_1_683952"]/span`},
  proceedToCheckoutBtn: { xpath: `//div[@id="center_column"]/p[@class='cart_navigation clearfix']/a[@title='Proceed to checkout']` },
  visibleNextPage:{xpath: `//div['#center_column']/h1['text()=Addresses']`},

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
