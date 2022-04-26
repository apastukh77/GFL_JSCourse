const { I } = inject();

module.exports = {
  createAccountLink: 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation',
  // mrPersonalInfoInput: {css: '#id_gender1'},
  // mrsPersonalInfoInput: {css: '#id_gender2'},
  firstNamePersonalInfoInput: {css: '#customer_firstname'},
  lastNamePersonalInfoInput: {css: '#customer_lastname'},
  passwdPersonalInfoInput: {css: '#passwd'},
  daysDOBPersonalInfoSelect: {css: '#days'},
  monthsDOBPersonalInfoSelect: {css: '#months'},
  yearsDOBPersonalInfoSelect: {css: '#years'},
  companyInput: {css: '#company'},
  address1AddrInput: {css: '#address1'},
  address2AddrInput: {css: '#address2'},
  cityAddrInput: {css: '#city'},
  idStateAddrSelect: {css: '#id_state'},
  postcodeAddrInput: {css: '#postcode'},
  additionalInfoAddrTextArea: {css: '#other'},
  homePhoneAddrInput: {css: '#phone'},
  mobilePhoneAddrInput: {css: '#phone_mobile'},
  addressAliasAddrInput: {css: '#alias'},
  // submitAccountBtn: {css: '#submitAccount'},



  openAuthentication(){
    I.amOnPage(this.createAccountLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.submitAccountBtn);
  },



  fillNewUserForm(user){
    this.waitForPageLoad();
    I.fillField(this.firstNamePersonalInfoInput, user.firstName);
    I.fillField(this.lastNamePersonalInfoInput, user.lastName);
    I.click(this.idStateAddrSelect);
    I.selectOption(this.idStateAddrSelect , user.state);
    I.fillField(this.postcodeAddrInput, user.zipCode);
    I.fillField(this.companyInput, user.company);
    I.fillField(this.address1AddrInput, user.address1);
    I.fillField(this.address2AddrInput, user.address2);
    I.fillField(this.additionalInfoAddrTextArea, user.additionalInfo);
    I.fillField(this.homePhoneAddrInput, user.homePhone);
    I.fillField(this.mobilePhoneAddrInput, user.mobilePhone);
    I.fillField(this.cityAddrInput, user.city);
    I.fillField(this.passwdPersonalInfoInput, user.password());
    I.fillField(this.addressAliasAddrInput, user.alias());
    
  //   I.waitForInvisible({xpath: `//option[text()=`${user.state}`]`});
  //   I.click({xpath: `//option[text()=`${user.state}`]`});
  },

  waitForPageLoad(){
    I.waitForVisible(this.firstNamePersonalInfoInput);
  },

  randomDayDOB (minDayDOBOption, maxDayDOBOption) {
		randomDayDOB = Math.floor(Math.random() * (maxDayDOBOption - minDayDOBOption + 1)) + minDayDOBOption;
    return dayDOB = String(randomDayDOB);
	},

  randomMonthDOB (minMonthDOBOption, maxMonthDOBOption) {
		randomMonthDOB = Math.floor(Math.random() * (maxMonthDOBOption - minMonthDOBOption + 1)) + minMonthDOBOption;
    return monthDOB = String(randomMonthDOB);
	},

  randomYearDOB (minYearDOBOption, maxYearDOBOption) {
		randomYearDOB = Math.floor(Math.random() * (maxYearDOBOption - minYearDOBOption + 1)) + minYearDOBOption;
    return yearDOB = String(randomYearDOB);
	},

  fillDOB(dayDOB, monthDOB, yearDOB){
    
    I.click(this.daysDOBPersonalInfoSelect);
    I.selectOption(this.daysDOBPersonalInfoSelect, dayDOB);
    I.click(this.daysDOBPersonalInfoSelect);
    I.click(this.monthsDOBPersonalInfoSelect);
    I.selectOption(this.monthsDOBPersonalInfoSelect, monthDOB);
    I.click(this.monthsDOBPersonalInfoSelect);
    I.click(this.yearsDOBPersonalInfoSelect);
    I.selectOption(this.yearsDOBPersonalInfoSelect, yearDOB);
    I.click(this.yearsDOBPersonalInfoSelect);

  },
  
  randomGender(){
    var arr = (Math.random() * 100);
      var num = Math.trunc(arr); 
      if (num % 2 == 0) {
      var mr_mrs = 1;
      } else mr_mrs = 2;
  
      switch (mr_mrs){
      case (mr_mrs==1):   
      I.fillField(this.mrPersonalInfoInput);
      break; //`//option[text()=`${user.state}`]`}
      case (mr_mrs==2):   
      I.fillField(this.mrsPersonalInfoInput);
      break;
      }
    },

  clickSubmitAccountBtn(){
    I.click(this.SubmitAccountBtn);
  }	
  // insert your locators and methods here
}
