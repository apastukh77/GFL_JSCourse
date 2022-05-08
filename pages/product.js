const { I } = inject();

module.exports = {
  toProductLink:
    "http://automationpractice.com/index.php?id_product=1&controller=product",
  //addToCartBtn: {xpath: `//button[@class ='exclusive']`},
  addToCartBtn: { xpath: `//span[.='Add to cart']` },
  proceedToCheckoutBtn: {
    xpath: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a',
  },
  price: {css: '#our_price_display'},

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

  async getProductPrice(){
    return await I.grabTextFrom(this.price);
  },
  
  checkPageIsVisible(){
    //I.retry(2).waitForVisible({ xpath: `//*[text()='Shopping-cart summary']` });
    I.waitForVisible({xpath: `//div/h1['@class=cart_title,text()=Shopping-cart summary']`});
  }

};
