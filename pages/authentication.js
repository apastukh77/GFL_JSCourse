const { I } = inject();

module.exports = {
  authenticationLink: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
  createAccountEmailInput: {css: '#email_create'},
  createAccountBtn: {css: '#SubmitCreate'},
  generateEmail: '',
  openAuthentication(){
    I.amOnPage(this.authenticationLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.createAccountEmailInput);
  },
  generateEmail(){
		return generateEmail=Date.now()+'@test.org.ca'
	},
  fillCreateAccountEmailInput(){
    this.waitForPageLoad();
    this.generateEmail();
   	I.fillField(this.createAccountEmailInput, generateEmail);
	},
  clickCreateAccountBtn(){
    I.click(this.createAccountBtn);
  }	
  // insert your locators and methods here
}
