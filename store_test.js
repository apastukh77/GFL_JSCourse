const file_handler = require("./helper/file_handler");
const user = require("./userDate/user");

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
    let customer = user.getUser();
    homePage.clickSignIn();
    email = customer.getCreateUniqueEmail();
    password = customer.getCreateUniquePasswd();
    console.log("email: " + email + " " + "password: " + password);
    file_handler.recordEmailPasswordToFile();
    authenticationPage.fillCreateAccountEmailInput(email);
    authenticationPage.clickCreateAccountBtn();
    createAccountPage.fillNewUserForm(customer, password);
    createAccountPage.clickSubmitAccountBtn();
    myAccountPage.checkPageIsVisible();
  }
).tag("@registration");

Data(file_handler.getData())
.Scenario(
  "test making purchase",
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
    myAccountPage.checkPageIsVisible();
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
