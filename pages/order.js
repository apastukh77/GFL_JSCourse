const { I } = inject();

module.exports = {

  orderLink: 'http://automationpractice.com/index.php?controller=order',
  proceedToCheckoutBtn: {xpath: '//*[@id="center_column"]/p[2]/a[1]'},

  openOrderLink(){
    I.amOnPage(this.orderLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.proceedToCheckoutBtn);
  },

  clickProceedToCheckoutBtn(){
    this.waitForPageLoad();
    I.click(this.proceedToCheckoutBtn);
  }

}
