const createAccount = require("./pages/createAccount");
const { logoutBtn } = require("./pages/myAccount");
const openCatalog = require("./pages/openCatalog");
const { payByBankWireBtn } = require("./pages/paymentMethod");
const product = require("./pages/product");
const shoppingCartSummary = require("./pages/shoppingCartSummary");

let user = {
  firstName: "Hajeb",
  lastName: "O'Sullivan",
  state: "Alabama",
  city: "Birmingham",
  zipCode: "35242",
  address1: "2nd St. 34",
  address2: "2nd St. 35",
  company: "TrackEnsure Inc",
  additionalInfo: "testtest1",
  homePhone: "+1727282892",
  mobilePhone: "+1727287097",

  alias: function () {
    var aliasArr = ["2nd St.34", "Birmingham", "AL", "US", "35242"];
    var aliasStr = aliasArr.toString().replace(/[\s.,%]/g, " ");
    return aliasStr;
  },

  gender: function () {
    var arr = Math.random() * 100;
    var num = Math.trunc(arr);
    if (num % 2 == 0) {
      var mr_mrs = 1;
    } else mr_mrs = 2;

    return mr_mrs;
  },

  getRandomDayDOB: function () {
    var minDayDOBOption = 2,
    maxDayDOBOption = 32;
    randomizer.getRandomNum(minDayDOBOption, maxDayDOBOption);
    randomDayDOB = random;
    return (dayDOB = String(randomDayDOB));
  },

  getRandomMonthDOB: function () {
    var minMonthDOBOption = 2,
    maxMonthDOBOption = 13;
    randomizer.getRandomNum(minMonthDOBOption, maxMonthDOBOption);
    randomMonthDOB = random;
    return (monthDOB = String(randomMonthDOB));
  },

  getRandomYearDOB: function () {
    var minYearDOBOption = 1900,
    maxYearDOBOption = 2022;
    randomizer.getRandomNum(minYearDOBOption, maxYearDOBOption);
    randomYearDOB = random;
    return (yearDOB = String(randomYearDOB));
  },
};

let randomizer = {
  getRandomNum: function (min, max) {
    random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  },
};

Feature("Store");

Before(({ I, homePage }) => {
  homePage.openStore();
  I.say("Before test message");
});

Scenario(
  "test something",
  ({ I, homePage, authenticationPage, createAccountPage }) => {
    homePage.clickSignIn();
    authenticationPage.generateEmail();
    authenticationPage.fillCreateAccountEmailInput(generateEmail);
    authenticationPage.clickCreateAccountBtn();
    createAccountPage.fillNewUserForm(user);
    createAccountPage.createUniquePasswd();
    createAccountPage.fillPasswordField(uniquePasswd);
    createAccountPage.clickSubmitAccountBtn();
    createAccountPage.checkPageIsVisible();
  }
);

Scenario(
  "test something_2",
  ({
    I,
    homePage,
    authenticationPage,
    myAccountPage,
    productPage,
    step1Page,
	shoppingCartSummaryPage,
    shippingPage,
    paymentMethodPage,
    orderSummaryPage,
  }) => {
    homePage.clickSignIn();
    authenticationPage.fillAlreadyRegisteredEmailInput(generateEmail);
    authenticationPage.fillAlreadyRegisteredPasswdInput(uniquePasswd);
    authenticationPage.clickSubmitLoginBtn();
    myAccountPage.clickT_ShirtsBtn();
	openCatalog.clickQuickViewImg();
	productPage.clickAddToCartBtn();
    productPage.clickProceedToCheckoutBtn();
	shoppingCartSummaryPage.clickProceedToCheckoutBtn();
	shoppingCartSummaryPage.checkPageIsVisible();
    step1Page.clickProceedToCheckoutBtn();
	shippingPage.checkAgreeCheckBox();
    shippingPage.clickProceedToCheckoutBtn();
	paymentMethodPage.clickPayByBankWireBtn();
	orderSummaryPage.clickConfirmMyOrderBtn();
	orderSummaryPage.checkPageIsVisible();

    pause();
  }
);

After(({ I, authenticationPage, myAccountPage }) => {
  myAccountPage.goOnMyAccountPage();
  myAccountPage.clickLogoutBtn();
  console.log("After has done!");
});
