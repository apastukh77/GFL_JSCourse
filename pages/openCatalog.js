const { I } = inject();

module.exports = {
  catalogLink:
    "http://automationpractice.com/index.php?id_category=5&controller=category",
  quickViewImg: {
    xpath: `//div/a[@class='product_img_link']/img[@title='Faded Short Sleeve T-shirts']`,
  },
  visibleNextPage: {xpath: `//div['#center_column']/div/section['@class=primary_block row']/h3[text()='Data sheet']` },

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

  checkPageIsVisible() {
      I.waitForVisible(this.visibleNextPage);
  },
};
