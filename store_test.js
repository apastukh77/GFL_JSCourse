const createAccount = require("./pages/createAccount");
const { logoutBtn } = require("./pages/myAccount");
const openCatalog = require("./pages/openCatalog");
const { payByBankWireBtn } = require("./pages/paymentMethod");
const product = require("./pages/product");

let user = {
	
	firstName: 'Hajeb',
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
	// endPasswd: password(),
	alias: function(){
		var aliasArr = ['2nd St.34','Birmingham','AL','US','35242'];
		var aliasStr = aliasArr.toString().replace(/[\s.,%]/g, ' ');
		return aliasStr;
	},
    // password: function (){
	// var generatedPasswd = [], random = 0, endPasswd = '';
    // var passwdArray = ['0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
    // var passwdMaxLength = '12';
    // for ( var i = 0;  i <= Number(passwdMaxLength)-1; i++) {
	// 	random = Math.floor(Math.random() * passwdArray.length);
	// 	generatedPasswd[i] = passwdArray[random];
	// };
	// 	endPasswd = generatedPasswd.toString().replace(/[\s.,%]/g, '');
	// 	return endPasswd;
		
	// },
	
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
		randomizer.getRandomNum(minDayDOBOption,  maxDayDOBOption);
		randomDayDOB = random;
    return dayDOB = String(randomDayDOB);
	},
 	getRandomMonthDOB: function () {
		var minMonthDOBOption = 2, maxMonthDOBOption = 13;
		randomizer.getRandomNum(minMonthDOBOption,  maxMonthDOBOption);
		randomMonthDOB = random;
    return monthDOB = String(randomMonthDOB);
	},
 	getRandomYearDOB: function () {
		var minYearDOBOption = 1900, maxYearDOBOption = 2022;
		randomizer.getRandomNum(minYearDOBOption,  maxYearDOBOption);
		randomYearDOB = random;
    return yearDOB = String(randomYearDOB);
	},

}

let randomizer = {
getRandomNum: function(min, max){
	random = Math.floor(Math.random() * (max - min + 1)) + min;
	return random;
	}
}

Feature('Store');

Before(({I, homePage})=>{
	homePage.openStore();
	I.say('Before test message');
	}
);

Scenario('test something', ({ I, homePage, authenticationPage, createAccountPage}) => {
	homePage.clickSignIn();
	authenticationPage.generateEmail();
	authenticationPage.fillCreateAccountEmailInput(generateEmail);
	authenticationPage.clickCreateAccountBtn();
	createAccountPage.fillNewUserForm(user);
	createAccountPage.createUniquePasswd();
	createAccountPage.fillPasswordField(uniquePasswd);
	createAccountPage.clickSubmitAccountBtn();
	createAccountPage.checkPageIsVisible();
		
});

Scenario('test something_2', ({ I, homePage, authenticationPage, createAccountPage, myAccountPage, productPage, orderPage, step1Page, shippingPage, paymentMethodPage, orderSummaryPage  }) => {
	
	homePage.clickSignIn();
	authenticationPage.fillAlreadyRegisteredEmailInput(generateEmail);
	authenticationPage.fillAlreadyRegisteredPasswdInput(uniquePasswd);
	authenticationPage.clickSubmitLoginBtn();
	myAccountPage.clickT_ShirtsBtn();
	openCatalog.clickQuickViewImg();
	productPage.clickAddToCartBtn();
	productPage.clickProceedToCheckoutBtn();
	orderPage.clickProceedToCheckoutBtn();
	step1Page.clickProceedToCheckoutBtn();
	shippingPage.checkAgreeCheckBox();
	shippingPage.clickProceedToCheckoutBtn();
	paymentMethodPage.clickPayByBankWireBtn();
	orderSummaryPage.clickConfirmMyOrderBtn();

	pause();
	
});

After(({I, authenticationPage, myAccountPage})=>{
	myAccountPage.clickLogoutBtn();
	console.log('After has done!');
	}
);