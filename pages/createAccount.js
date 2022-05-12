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

  fillNewUserForm(customer, password) {
    this.waitForPageLoad();
    switch (customer.gender()) {
      case 1:
        I.click(this.mrPersonalInfoInput);
        break;
      case 2:
        I.click(this.mrsPersonalInfoInput);
        break;
    };
    I.fillField(this.firstNamePersonalInfoInput, customer.firstName);
    I.fillField(this.lastNamePersonalInfoInput, customer.lastName);
    I.fillField(this.passwdPersonalInfoInput, password);
    I.click(this.daysDOBPersonalInfoSelect);
    try {
      I.retry().selectOption(
        this.daysDOBPersonalInfoSelect,
        customer.getRandomDayDOB()
      );
    } catch (e) {
      console.log("Error in select Day option");
    };
    I.click(this.daysDOBPersonalInfoSelect);
    I.click(this.monthsDOBPersonalInfoSelect);
    try {
      I.retry().selectOption(
        this.monthsDOBPersonalInfoSelect,
        customer.getRandomMonthDOB()
      );
    } catch (e) {
      console.log("Error in select Month option");
    };
    I.click(this.monthsDOBPersonalInfoSelect);
    I.click(this.yearsDOBPersonalInfoSelect);
    I.selectOption(
      this.yearsDOBPersonalInfoSelect,
      customer.getRandomYearDOB()
    );
    I.click(this.yearsDOBPersonalInfoSelect);
    I.fillField(this.companyInput, customer.company);
    I.fillField(this.address1AddrInput, customer.address1);
    I.fillField(this.address2AddrInput, customer.address2);
    I.fillField(this.cityAddrInput, customer.city);
    I.click(this.idStateAddrSelect);
    I.selectOption(this.idStateAddrSelect, customer.state);
    I.fillField(this.postcodeAddrInput, customer.zipCode);
    I.fillField(this.additionalInfoAddrTextArea, customer.additionalInfo);
    I.fillField(this.homePhoneAddrInput, customer.homePhone);
    I.fillField(this.mobilePhoneAddrInput, customer.mobilePhone);
    I.fillField(this.addressAliasAddrInput, customer.alias());
  },

  clickSubmitAccountBtn() {
    I.click(this.submitAccountBtn);
  },
};
