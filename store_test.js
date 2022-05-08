const file_handler = require("./helper/file_handler");

let logins = file_handler.getContentFromFile(
  "./email_password/email_password_input.txt"
);
console.log(logins);
let array = file_handler.getArrayOfObjects(logins);
console.log(array);

Feature("Store");

Before(({ I, homePage }) => {
  homePage.openStore();
  I.say("Before test message");
});

xScenario(
  "test something",
  ({
    I,
    homePage,
    authenticationPage,
    createAccountPage,
    user,
    helper,
    file_handler,
  }) => {
    homePage.clickSignIn();
    helper.createUniqueEmail();
    helper.createUniquePasswd();
    console.log("email: " + uniqueEmail + " " + "password: " + uniquePasswd);
    file_handler.recordEmailPasswordToFile();
    file_handler.getData();
    authenticationPage.fillCreateAccountEmailInput(uniqueEmail);
    authenticationPage.clickCreateAccountBtn();
    createAccountPage.fillNewUserForm(user, uniquePasswd);
    createAccountPage.clickSubmitAccountBtn();
    createAccountPage.checkPageIsVisible();
  }
);

Data(file_handler.getData())
  .Scenario(
    "multi login",
    ({ current, homePage, authenticationPage, user, createAccountPage }) => {
      console.log(
        "email: " + current.email + "\npassword: " + current.password
      );
      homePage.clickSignIn();
      authenticationPage.fillCreateAccountEmailInput(current.email);
      authenticationPage.clickCreateAccountBtn();
      createAccountPage.fillNewUserForm(user, current.password);
      createAccountPage.clickSubmitAccountBtn();
      createAccountPage.checkPageIsVisible();
    }
  )
  .tag("@multi_login");

xScenario(
  "test something_2",
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
    authenticationPage.fillAlreadyRegisteredEmailInput(uniqueEmail);
    authenticationPage.fillAlreadyRegisteredPasswdInput(uniquePasswd);
    authenticationPage.clickSubmitLoginBtn();
    myAccountPage.clickT_ShirtsBtn();
    openCatalogPage.clickQuickViewImg();
    productPage.clickAddToCartBtn();
    productPage.getProductPrice();
    const priceOnProductPage = await productPage.getProductPrice();
    console.log(priceOnProductPage);
    productPage.clickProceedToCheckoutBtn();
    shoppingCartSummaryPage.getPriceOnShoppingCartPage();
    const priceOnShoppingCartPage =
      await shoppingCartSummaryPage.getPriceOnShoppingCartPage();
    console.log(priceOnProductPage);
    I.assertEqual(priceOnProductPage, priceOnShoppingCartPage);
    shoppingCartSummaryPage.clickProceedToCheckoutBtn();
    shoppingCartSummaryPage.checkPageIsVisible();
    step1Page.clickProceedToCheckoutBtn();
    shippingPage.checkAgreeCheckBox();
    shippingPage.clickProceedToCheckoutBtn();
    paymentMethodPage.clickPayByBankWireBtn();
    orderSummaryPage.clickConfirmMyOrderBtn();
    orderSummaryPage.checkPageIsVisible();
  }
);

Data(file_handler.getData())
.Scenario(
  "multi login_2",
  async ({
    I,
    current,
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
    authenticationPage.fillAlreadyRegisteredEmailInput(current.email);
    authenticationPage.fillAlreadyRegisteredPasswdInput(current.password);
    authenticationPage.clickSubmitLoginBtn();
    myAccountPage.clickT_ShirtsBtn();
    openCatalogPage.clickQuickViewImg();
    productPage.clickAddToCartBtn();
    productPage.getProductPrice();
    const priceOnProductPage = await productPage.getProductPrice();
    console.log(priceOnProductPage);
    productPage.clickProceedToCheckoutBtn();
    shoppingCartSummaryPage.getPriceOnShoppingCartPage();
    const priceOnShoppingCartPage =
      await shoppingCartSummaryPage.getPriceOnShoppingCartPage();
    console.log(priceOnProductPage);
    I.assertEqual(priceOnProductPage, priceOnShoppingCartPage);
    shoppingCartSummaryPage.clickProceedToCheckoutBtn();
    shoppingCartSummaryPage.checkPageIsVisible();
    step1Page.clickProceedToCheckoutBtn();
    shippingPage.checkAgreeCheckBox();
    shippingPage.clickProceedToCheckoutBtn();
    paymentMethodPage.clickPayByBankWireBtn();
    orderSummaryPage.clickConfirmMyOrderBtn();
    orderSummaryPage.checkPageIsVisible();
  }
)
.tag("@multi_login_2");


After(({ I, authenticationPage, myAccountPage }) => {
  myAccountPage.goOnMyAccountPage();
  myAccountPage.clickLogoutBtn();
  console.log("After has done!");
});
