const { I } = inject();

module.exports = {

  myAccountLink: 'http://automationpractice.com/index.php?controller=my-account',
  logoutBtn: {xpath: '//*[@id="header"]/div[2]/div/div/nav/div[2]/a'},
  t_ShirtsBtn: {xpath: '//*[@id="block_top_menu"]/ul/li[3]/a'},
  addToCartBtn: {xpath: '//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]'},
  proceedToCheckoutBtn: {xpath: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'},
  
  openMyAccountLink(){
    I.amOnPage(this.myAccountLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.logoutBtn);
  },

  clickT_ShirtsBtn(){
    I.click(this.t_ShirtsBtn);
  },

  
  clickAddToCart(){
    I.click(this.addToCartBtn);
  },
  clickProceedToCheckout(){
    I.click(this.proceedToCheckoutBtn);
  },
  
  
  clickLogoutBtn(){
     I.click(this.logoutBtn);
  }	

}
