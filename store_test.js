const createAccount = require("./pages/createAccount");
let user = {
	
	firstName: 'Lorenzo',
	lastName: 'Kaye', 
	state: 'Alabama',
	city: 'Birmingham',
	zipCode: '35242',
	address1: '2nd St. 34',
	address2: '2nd St. 35',
	company: 'TrackEnsure Inc',
	additionalInfo: 'testtest1',
	homePhone: '+1727282892',
	mobilePhone: '+1727287097',
	alias: function(){
		var aliasArr = ['Lorenzo','Kaye','2nd St. 34','Birmingham','Alabama','USA','35242'];
		var aliasStr = aliasArr.toString().replace(/[\s.,%]/g, ' ');
		return aliasStr;
	},
	password: function (){
	var generatedPasswd = [], random = 0, endPasswd = '';
    var passwdArray = ['0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
    var passwdMaxLength = '12';
    for ( var i = 0;  i <= Number(passwdMaxLength); i++) {
		random = Math.floor(Math.random() * passwdArray.length);
		generatedPasswd[i] = (passwdArray[random]);
	};
		endPasswd = generatedPasswd.toString().replace(/[\s.,%]/g, '');
	return endPasswd;
	},
}

Feature('Store');
 
Scenario('test something', ({ I, homePage, authenticationPage, createAccountPage}) => {
	homePage.openStore();
	homePage.clickSignIn();
	authenticationPage.generateEmail();
	authenticationPage.fillCreateAccountEmailInput(generateEmail);
	authenticationPage.clickCreateAccountBtn();
	createAccountPage.fillNewUserForm(user);
	createAccountPage.randomDayDOB(2,32);
	createAccountPage.randomMonthDOB(2,13);
	createAccountPage.randomYearDOB(1900,2022);
	createAccountPage.fillDOB(dayDOB, monthDOB, yearDOB);
	createAccountPage.randomGender();

	pause();
});