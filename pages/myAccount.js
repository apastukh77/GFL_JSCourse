const { I } = inject();

module.exports = {

  myAccountLink: 'http://automationpractice.com/index.php?controller=my-account',
  logoutBtn: {xpath: '//*[@id="header"]/div[2]/div/div/nav/div[2]/a'},
  t_ShirtsBtn: {xpath: '//*[@id="block_top_menu"]/ul/li[3]/a'},
  
  
  openMyAccountLink(){
    I.amOnPage(this.myAccountLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.t_ShirtsBtn);
  },

  clickT_ShirtsBtn(){
    this.waitForPageLoad();
    I.click(this.t_ShirtsBtn);
  },

  clickLogoutBtn(){
    I.click(this.logoutBtn);
  }	

}
