const { I } = inject();

module.exports = {
  visiblePage: {
    xpath: `//div[@class='breadcrumb clearfix']/span[text()='Order confirmation']`,
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visiblePage);
  },
};
