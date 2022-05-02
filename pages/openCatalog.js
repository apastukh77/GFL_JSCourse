const { I } = inject();

module.exports = {
  openCatalogLink: 'http://automationpractice.com/index.php?id_category=5&controller=category',
  quickViewImg: {xpath: `//*[@id="center_column"]/ul/li/div/div[1]/div/a[1]/img`},



  openMyAccountLink(){
    I.amOnPage(this.openCatalogLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.quickViewImg);
  },

  clickQuickViewImg(){
    this.waitForPageLoad();
    I.forceClick(this.quickViewImg);
    
  },



  

}
