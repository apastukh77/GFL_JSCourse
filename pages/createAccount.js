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

  fillNewUserForm(user) {
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
    I.fillField(this.passwdPersonalInfoInput, this.password());
    I.click(this.daysDOBPersonalInfoSelect);
    I.selectOption(this.daysDOBPersonalInfoSelect, user.getRandomDayDOB());
    I.click(this.daysDOBPersonalInfoSelect);
    I.click(this.monthsDOBPersonalInfoSelect);
    I.retry().selectOption(
      this.monthsDOBPersonalInfoSelect,
      user.getRandomMonthDOB()
    );
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

  password() {
    var generatedPasswd = [],
      random = 0,
      endPasswd = "";
    var passwdArray = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    var passwdMaxLength = "12";
    for (var i = 0; i <= Number(passwdMaxLength) - 1; i++) {
      random = Math.floor(Math.random() * passwdArray.length);
      generatedPasswd[i] = passwdArray[random];
    }
    endPasswd = generatedPasswd.toString().replace(/[\s.,%]/g, "");
    return endPasswd;
  },

  createUniquePasswd() {
    uniquePasswd = this.password();
    return uniquePasswd;
  },

  fillPasswordField(uniquePasswd) {
    I.fillField(this.passwdPersonalInfoInput, uniquePasswd);
  },

  clickSubmitAccountBtn() {
    I.click(this.submitAccountBtn);
  },

  checkPageIsVisible() {
    I.waitForVisible({ xpath: `//*[text()='My account']` });
  }

};
