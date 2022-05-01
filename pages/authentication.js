const { I } = inject();

module.exports = {
  authenticationLink: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
  createAccountEmailInput: {css: '#email_create'},
  createAccountBtn: {css: '#SubmitCreate'},
  alreadyRegisteredEmailInput: {css: '#email'},
  alreadyRegisteredPasswdInput: {css: '#passwd'},
  submitLoginBtn: {css: '#SubmitLogin'},
  generateEmail: '',
  openAuthentication(){
    I.amOnPage(this.authenticationLink);
  },
  waitForPageLoad(){
    I.waitForVisible(this.createAccountEmailInput);
  },
  
  generateEmail(){
    return generateEmail=Date.now()+'@test.org.ca';
	},

  // saveUniqueUserEmail(generateEmail){
  //     return uniqueEmail = generateEmail;
  // },

  fillCreateAccountEmailInput(generateEmail){
    this.waitForPageLoad();
    //this.generateEmail();
   	I.fillField(this.createAccountEmailInput, generateEmail);
      
	},
  clickCreateAccountBtn(){
    I.click(this.createAccountBtn);
  },
  
  waitForPageLoad2(){
    I.waitForVisible(this.alreadyRegisteredEmailInput);
    I.waitForVisible(this.alreadyRegisteredPasswdInput);
  },

  fillAlreadyRegisteredEmailInput(generateEmail){
    this.waitForPageLoad2()
    I.fillField(this.alreadyRegisteredEmailInput, generateEmail);
  },
  
  fillAlreadyRegisteredPasswdInput(user){
  console.log(user);
    I.fillField(this.alreadyRegisteredPasswdInput, user.password());
  },
  clickSubmitLoginBtn(){
    I.click(this.submitLoginBtn);
  }

  // insert your locators and methods here
}
