const createAccount = require("./pages/createAccount");
let user = {
	
	firstName: 'Tomas',
	lastName: 'O\'Sullivan', 
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
		var aliasArr = ['2nd St.34','Birmingham','AL','US','35242'];
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
	gender: function (){
	var arr = (Math.random() * 100);
		var num = Math.trunc(arr); 
		if (num % 2 == 0) {
		var mr_mrs = 1;
		} else mr_mrs = 2;

	return mr_mrs;
	},
	getRandomDayDOB: function () {
		var minDayDOBOption = 2, maxDayDOBOption = 32;
		randomDayDOB = Math.floor(Math.random() * (maxDayDOBOption - minDayDOBOption + 1)) + minDayDOBOption;
    return dayDOB = String(randomDayDOB);
	},
 	getRandomMonthDOB: function () {
		var minMonthDOBOption = 2, maxMonthDOBOption = 13;
		randomMonthDOB = Math.floor(Math.random() * (maxMonthDOBOption - minMonthDOBOption + 1)) + minMonthDOBOption;
    return monthDOB = String(randomMonthDOB);
	},
 	getRandomYearDOB: function () {
		var minYearDOBOption = 1900, maxYearDOBOption = 2022;
		randomYearDOB = Math.floor(Math.random() * (maxYearDOBOption - minYearDOBOption + 1)) + minYearDOBOption;
    return yearDOB = String(randomYearDOB);
	},
}

Feature('Store');
 
Scenario('test something', ({ I, homePage, authenticationPage, createAccountPage}) => {
	homePage.openStore();
	homePage.clickSignIn();
	authenticationPage.fillCreateAccountEmailInput();
	authenticationPage.clickCreateAccountBtn();
	createAccountPage.fillNewUserForm(user);
	createAccountPage.clickSubmitAccountBtn();
	createAccountPage.checkPageIsVisible();

	
});