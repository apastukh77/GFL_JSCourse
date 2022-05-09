const { I } = inject();

module.exports = {
  toProductLink:
    "http://automationpractice.com/index.php?id_product=1&controller=product",
  //addToCartBtn: {xpath: `//button[@class ='exclusive']`},
  addToCartBtn: { xpath: `//span[.='Add to cart']` },
  proceedToCheckoutBtn: {
    xpath: `//div[@class='button-container']/a[@title='Proceed to checkout']`,
  },
  price: { css: "#our_price_display" },
  visibleNextPage: {
    xpath: `//div/h1['@class=cart_title,text()=Shopping-cart summary']`,
  },

  openToProductLink() {
    I.amOnPage(this.toProductLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.proceedToCheckoutBtn);
  },

  clickAddToCartBtn() {
    I.waitForElement(this.addToCartBtn, 5);
    I.retry().forceClick(this.addToCartBtn);
  },

  clickProceedToCheckoutBtn() {
    I.click(this.proceedToCheckoutBtn);
  },

  async getProductPrice() {
    return await I.grabTextFrom(this.price);
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visibleNextPage);
  },
};
