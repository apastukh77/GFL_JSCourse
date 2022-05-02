const { I } = inject();

module.exports = {

  toProductLink: 'http://automationpractice.com/index.php?id_product=1&controller=product',
  addToCartBtn: {xpath: `//button[@class ='exclusive']`},
  proceedToCheckoutBtn: {xpath: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'}, 

  openToProductLink(){
    I.amOnPage(this.toProductLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.proceedToCheckoutBtn);
  },
  clickAddToCartBtn(){
    //this.waitForPageLoad();
    I.forceClick(this.addToCartBtn);
  },

  clickProceedToCheckoutBtn(){
    I.click(this.proceedToCheckoutBtn);
  }
  
}
