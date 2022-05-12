const file_handler = require("./helper/file_handler");

Feature("Store");

Before(({ I, homePage }) => {
  homePage.openStore();
  I.say("Before test message");
});

Scenario(
  "test a new customer registration ",
  async ({
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
    let email = customer.createUniqueEmail();
    let password = customer.createUniquePasswd();
    console.log("email: " + email + " " + "password: " + password);
    await file_handler.recordEmailPasswordToFile(email, password);
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
      myAccountPage.clickT_ShirtsBtn();
      openCatalogPage.clickQuickViewImg();
      productPage.clickAddToCartBtn();
      const priceOnProductPage = 
        await productPage.getProductPrice();
      console.log(priceOnProductPage);
      productPage.clickProceedToCheckoutBtn();
      const priceOnShoppingCartPage =
        await shoppingCartSummaryPage.getPriceOnShoppingCartPage();
      console.log(priceOnProductPage);
      I.assertEqual(priceOnProductPage, priceOnShoppingCartPage);
      shoppingCartSummaryPage.clickProceedToCheckoutBtn();
      step1Page.clickProceedToCheckoutBtn();
      shippingPage.checkAgreeCheckBox();
      shippingPage.clickProceedToCheckoutBtn();
      paymentMethodPage.clickPayByBankWireBtn();
      orderSummaryPage.clickConfirmMyOrderBtn();
    }
  )
  .tag("@purchase");

After(({ I, myAccountPage }) => {
  myAccountPage.clickLogoutBtn();
  console.log("After has done!");
});
