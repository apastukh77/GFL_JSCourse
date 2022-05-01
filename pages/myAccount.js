const { I } = inject();

module.exports = {

  myAccountLink: 'http://automationpractice.com/index.php?controller=my-account',
  logoutBtn: {xpath: '//*[@id="header"]/div[2]/div/div/nav/div[2]/a'},
  
  openMyAccountLink(){
    I.amOnPage(this.myAccountLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.logoutBtn);
  },
  
  clickLogoutBtn(){
   // this.waitForPageLoad();
    I.click(this.logoutBtn);
  }	

}
