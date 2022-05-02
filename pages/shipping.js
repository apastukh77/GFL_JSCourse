const { I } = inject();

module.exports = {

  shippingLink: 'http://automationpractice.com/index.php?controller=order',
  proceedToCheckoutBtn: {xpath: '//*[@id="form"]/p/button'},
  agreeCheckBox: {css: '#cgv'},
  

  openShippingLink(){
    I.amOnPage(this.shippingLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.proceedToCheckoutBtn);
  },

  checkAgreeCheckBox(){
    this.waitForPageLoad();
    I.click(this.agreeCheckBox);
  },
  
  clickProceedToCheckoutBtn(){
    I.click(this.proceedToCheckoutBtn);
  }

}
