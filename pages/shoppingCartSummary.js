const { I } = inject();

module.exports = {
  shoppingCartSummaryLink:
    "http://automationpractice.com/index.php?controller=order",

  price: { css: "#total_product" },

  proceedToCheckoutBtn: {
    xpath: `//div[@id="center_column"]/p[@class='cart_navigation clearfix']/a[@title='Proceed to checkout']`,
  },
  visiblePag: {
    xpath: `//div/h1['@class=cart_title,text()=Shopping-cart summary']`,
  },

  openShoppingCartSummaryLink() {
    I.waitForVisible(this.visiblePage);
    I.amOnPage(this.shoppingCartSummaryLink);
  },

  async getPriceOnShoppingCartPage() {
    I.waitForVisible(this.proceedToCheckoutBtn);
    return await I.retry().grabTextFrom(this.price);
  },

  clickProceedToCheckoutBtn() {
    I.click(this.proceedToCheckoutBtn);
  },

};
