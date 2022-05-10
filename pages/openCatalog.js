const { I } = inject();

module.exports = {
  catalogLink:
    "http://automationpractice.com/index.php?id_category=5&controller=category",
  quickViewImg: {
    xpath: `//div/a[@class='product_img_link']/img[@title='Faded Short Sleeve T-shirts']`,
  },
  visibleNextPage: {
    xpath: `//div['#layered_block_left']/p[text()='Catalog']`,
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

  checkPageIsVisible() {
    I.waitForVisible(this.visibleNextPage);
  },
};
