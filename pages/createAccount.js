const { I } = inject();

module.exports = {
  createAccountLink:
    "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation",
  mrPersonalInfoInput: { css: "#id_gender1" },
  mrsPersonalInfoInput: { css: "#id_gender2" },
  firstNamePersonalInfoInput: { css: "#customer_firstname" },
  lastNamePersonalInfoInput: { css: "#customer_lastname" },
  passwdPersonalInfoInput: { css: "#passwd" },
  daysDOBPersonalInfoSelect: { css: "#days" },
  monthsDOBPersonalInfoSelect: { css: "#months" },
  yearsDOBPersonalInfoSelect: { css: "#years" },
  companyInput: { css: "#company" },
  address1AddrInput: { css: "#address1" },
  address2AddrInput: { css: "#address2" },
  cityAddrInput: { css: "#city" },
  idStateAddrSelect: { css: "#id_state" },
  postcodeAddrInput: { css: "#postcode" },
  additionalInfoAddrTextArea: { css: "#other" },
  homePhoneAddrInput: { css: "#phone" },
  mobilePhoneAddrInput: { css: "#phone_mobile" },
  addressAliasAddrInput: { css: "#alias" },
  submitAccountBtn: { css: "#submitAccount" },

  openCreateAccountLink() {
    I.amOnPage(this.createAccountLink);
  },
  waitForPageLoad() {
    I.waitForVisible(this.submitAccountBtn);
  },

  fillNewUserForm(user, uniquePasswd) {
    this.waitForPageLoad();
    switch (user.gender()) {
      case 1:
        I.click(this.mrPersonalInfoInput);
        break;
      case 2:
        I.click(this.mrsPersonalInfoInput);
        break;
    }
    I.fillField(this.firstNamePersonalInfoInput, user.firstName);
    I.fillField(this.lastNamePersonalInfoInput, user.lastName);
    I.fillField(this.passwdPersonalInfoInput, uniquePasswd);
    I.click(this.daysDOBPersonalInfoSelect);
    try{
    I.retry().selectOption(
      this.daysDOBPersonalInfoSelect,
      user.getRandomDayDOB()
    );
    } catch(e){
      console.log('Error in select Day option');
    };
    I.click(this.daysDOBPersonalInfoSelect);
    I.click(this.monthsDOBPersonalInfoSelect);
    try{
    I.retry().selectOption(
      this.monthsDOBPersonalInfoSelect,
      user.getRandomMonthDOB()
    );
    } catch (e){
      console.log('Error in select Month option');
    };
    I.click(this.monthsDOBPersonalInfoSelect);
    I.click(this.yearsDOBPersonalInfoSelect);
    I.selectOption(this.yearsDOBPersonalInfoSelect, user.getRandomYearDOB());
    I.click(this.yearsDOBPersonalInfoSelect);
    I.fillField(this.companyInput, user.company);
    I.fillField(this.address1AddrInput, user.address1);
    I.fillField(this.address2AddrInput, user.address2);
    I.fillField(this.cityAddrInput, user.city);
    I.click(this.idStateAddrSelect);
    I.selectOption(this.idStateAddrSelect, user.state);
    I.fillField(this.postcodeAddrInput, user.zipCode);
    I.fillField(this.additionalInfoAddrTextArea, user.additionalInfo);
    I.fillField(this.homePhoneAddrInput, user.homePhone);
    I.fillField(this.mobilePhoneAddrInput, user.mobilePhone);
    I.fillField(this.addressAliasAddrInput, user.alias());
  },

  waitForPageLoad() {
    I.waitForVisible(this.firstNamePersonalInfoInput);
  },

  clickSubmitAccountBtn() {
    I.click(this.submitAccountBtn);
  },

  checkPageIsVisible() {
    I.waitForVisible({ xpath: `//*[text()='My account']` });
  },
};
