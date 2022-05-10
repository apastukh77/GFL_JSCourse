const file_handler = require("./helper/file_handler");

let logins = file_handler.getContentFromFile(
  "./email_password/email_password.txt"
);
console.log(logins);
let array = file_handler.getArrayOfObjects(logins);
console.log(array);

Feature("Store");

Before(({ I, homePage }) => {
  homePage.openStore();
  I.say("Before test message");
});

Scenario(
  "test a new customer registration ",
  ({
    I,
    homePage,
    authenticationPage,
    createAccountPage,
    myAccountPage,
    user,
    file_handler,
  }) => {
    homePage.clickSignIn();
    email = user.createUniqueEmail();
    password = user.createUniquePasswd();
    console.log("email: " + email + " " + "password: " + password);
    file_handler.recordEmailPasswordToFile();
    file_handler.getData();
    authenticationPage.fillCreateAccountEmailInput(email);
    authenticationPage.clickCreateAccountBtn();
    createAccountPage.fillNewUserForm(user, password);
    createAccountPage.clickSubmitAccountBtn();
    myAccountPage.checkPageIsVisible();
  }
).tag("@registration");

Scenario(
  "test making purchase",
  async ({
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
    openCatalogPage,
  }) => {
    homePage.clickSignIn();
    authenticationPage.fillAlreadyRegisteredEmailInput(email);
    authenticationPage.fillAlreadyRegisteredPasswdInput(password);
    authenticationPage.clickSubmitLoginBtn();
    myAccountPage.clickT_ShirtsBtn();
    openCatalogPage.checkPageIsVisible();
    openCatalogPage.clickQuickViewImg();
    productPage.checkPageIsVisible();
    productPage.clickAddToCartBtn();
    productPage.getProductPrice();
    const priceOnProductPage = await productPage.getProductPrice();
    console.log(priceOnProductPage);
    productPage.clickProceedToCheckoutBtn();
    shoppingCartSummaryPage.checkPageIsVisible();
    shoppingCartSummaryPage.getPriceOnShoppingCartPage();
    const priceOnShoppingCartPage =
      await shoppingCartSummaryPage.getPriceOnShoppingCartPage();
    console.log(priceOnProductPage);
    I.assertEqual(priceOnProductPage, priceOnShoppingCartPage);
    shoppingCartSummaryPage.clickProceedToCheckoutBtn();
    step1Page.checkPageIsVisible();
    step1Page.clickProceedToCheckoutBtn();
    shippingPage.checkPageIsVisible();
    shippingPage.checkAgreeCheckBox();
    shippingPage.clickProceedToCheckoutBtn();
    paymentMethodPage.checkPageIsVisible();
    paymentMethodPage.clickPayByBankWireBtn();
    orderSummaryPage.checkPageIsVisible();
    orderSummaryPage.clickConfirmMyOrderBtn();
  }
).tag("@purchase");

After(({ I, myAccountPage }) => {
  myAccountPage.goOnMyAccountPage();
  myAccountPage.clickLogoutBtn();
  console.log("After has done!");
});
