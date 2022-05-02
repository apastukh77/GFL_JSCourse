const { I } = inject();

module.exports = {

  paymentMethod1Link: 'http://automationpractice.com/index.php?controller=order&multi-shipping=',
  payByBankWireBtn: {xpath: '//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a'},


  openMyAccountLink(){
    I.amOnPage(this.paymentMethod1Link);
  },
  waitForPageLoad(){
    I.waitForVisible(this.payByBankWireBtn);
  },

  clickPayByBankWireBtn(){
    this.waitForPageLoad();
    I.click(this.payByBankWireBtn);
  }

}
