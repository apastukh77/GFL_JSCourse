const { I } = inject();

module.exports = {

  paymentMethodLink: 'http://automationpractice.com/index.php?controller=order&multi-shipping=',
  payByBankWireBtn: {xpath: '//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a'},


  openPaymentMethodLink(){
    I.amOnPage(this.paymentMethodLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.payByBankWireBtn);
  },

  clickPayByBankWireBtn(){
    this.waitForPageLoad();
    I.click(this.payByBankWireBtn);
  }

}
