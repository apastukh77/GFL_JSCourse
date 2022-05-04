
Feature("Store");

Before(({ I, homePage }) => {

  homePage.openStore();
  I.say("Before test message");
});

Scenario(
  "test something",
  ({ I, homePage, authenticationPage, createAccountPage, user, helper }) => {
    homePage.clickSignIn();
    helper.createUniqueEmail();
    helper.createUniquePasswd();
    console.log('email: '+uniqueEmail  + ' '+ 'password: '+uniquePasswd );
    authenticationPage.fillCreateAccountEmailInput(uniqueEmail);
    authenticationPage.clickCreateAccountBtn();
    createAccountPage.fillNewUserForm(user, uniquePasswd );
    // createAccountPage.fillPasswordField(uniquePasswd);
    createAccountPage.clickSubmitAccountBtn();
    createAccountPage.checkPageIsVisible();
   
  }
);

Scenario(
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
    openCatalogPage
    
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

    pause();
  }
);

After(({ I, authenticationPage, myAccountPage }) => {
  myAccountPage.goOnMyAccountPage();
  myAccountPage.clickLogoutBtn();
  console.log("After has done!");
});
