const { I } = inject();

module.exports = {
  step1Link: "http://automationpractice.com/index.php?controller=order&step=1",
  proceedToCheckoutBtn: {
    xpath: `//div[@id="center_column"]/form/p/button[@type='submit']`,
  },
  visiblePage: {
    xpath: `//div['#center_column']/h1['text()=Addresses']`,
  },

  openStep1Link() {
    I.amOnPage(this.step1Link);
  },

  waitForPageLoad() {
    I.waitForVisible(this.proceedToCheckoutBtn);
  },

  clickProceedToCheckoutBtn() {
    this.waitForPageLoad();
    I.click(this.proceedToCheckoutBtn);
  },

  checkPageIsVisible() {
    I.waitForVisible(this.visiblePage);
  },
};
