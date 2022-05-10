const { I } = inject();

module.exports = {
  visibleNextPage: {
    xpath: `//div[@class='breadcrumb clearfix']/span[text()='Order confirmation']`,
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visibleNextPage);
  },
};
