const { I } = inject();

module.exports = {
  catalogLink:
    "http://automationpractice.com/index.php?id_category=5&controller=category",
  quickViewImg: {
    xpath: `//*[@id="center_column"]/ul/li/div/div[1]/div/a[1]/img`,
  },

  openCatalogLink() {
    I.amOnPage(this.openCatalogLink);
  },

  waitForPageLoad() {
    I.waitForVisible(this.quickViewImg);
  },

  clickQuickViewImg() {
    this.waitForPageLoad();
    I.forceClick(this.quickViewImg);
  },

  checkPageIsVisible(){
    I.retry().waitForVisible({ xpath: `//*[text()='Data sheet']` });
  }

};
