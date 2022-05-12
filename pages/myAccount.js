const { I } = inject();

module.exports = {
  myAccountLink:
    "http://automationpractice.com/index.php?controller=my-account",
  logoutBtn: {
    xpath: `//a[@class='logout']`,
  },

  tShirtsBtn: {
    xpath: `//div[@id='block_top_menu']/ul/li/a[@title='T-shirts']`,
  },

  visiblePage: {
    xpath: `//h1[text()='My account']`,
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visiblePage);
  },

  clickT_ShirtsBtn() {
    I.waitForVisible(this.tShirtsBtn);
    I.click(this.tShirtsBtn);
  },

  clickLogoutBtn() {
    I.click(this.logoutBtn);
  },
};
