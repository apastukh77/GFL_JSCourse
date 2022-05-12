const { I } = inject();

module.exports = {
  catalogLink:
    "http://automationpractice.com/index.php?id_category=5&controller=category",
  quickViewImg: {
    xpath: `//div/a[@class='product_img_link']/img[@title='Faded Short Sleeve T-shirts']`,
  },
  visiblePage: {
    xpath: `//div['#layered_block_left']/p[text()='Catalog']`,
  },

  openCatalogLink() {
    I.amOnPage(this.openCatalogLink);
    I.waitForVisible(this.visiblePage);
  },

  clickQuickViewImg() {
    I.waitForVisible(this.quickViewImg);
    I.forceClick(this.quickViewImg);
  },
};
