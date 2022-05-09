const { I } = inject();

module.exports = {
  myAccountLink:
    "http://automationpractice.com/index.php?controller=my-account",
  logoutBtn: {
    //xpath: `//nav/div[@class='header_user_info']/a[@class='logout']`,
    xpath: `//a[@class='logout']`,
  },
  tShirtsBtn: {
    xpath: `//div[@id='block_top_menu']/ul/li/a[@title='T-shirts']`,
  },
  visibleNextPage: {
    xpath: `//div['#layered_block_left']/p[text()='Catalog']`,
  },

  openMyAccountLink() {
    I.amOnPage(this.myAccountLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.tShirtsBtn);
  },

  clickT_ShirtsBtn() {
    this.waitForPageLoad();
    I.click(this.tShirtsBtn);
  },

  clickLogoutBtn() {
    I.click(this.logoutBtn);
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visibleNextPage);
  },

  goOnMyAccountPage() {
    I.amOnPage(this.myAccountLink);
  },
};
