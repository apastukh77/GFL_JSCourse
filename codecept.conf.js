const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://localhost",
      show: true,
      browser: "chromium", //["chromium", "firefox"]
      waitForNavigation: "networkidle0",
      waitForTimeout: 20000,
      timeout: 20000,
      // windowSize: '1900x1000',
    },
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
  },
  include: {
    I: "./steps_file.js",
    homePage: "./pages/home.js",
    authenticationPage: "./pages/authentication.js",
    createAccountPage: "./pages/createAccount.js",
    myAccountPage: "./pages/myAccount.js",
    openCatalogPage: "./pages/openCatalog.js",
    productPage: "./pages/product.js",
    shoppingCartSummaryPage: "./pages/shoppingCartSummary.js",
    step1Page: "./pages/step1.js",
    shippingPage: "./pages/shipping.js",
    paymentMethodPage: "./pages/paymentMethod.js",
    orderSummaryPage: "./pages/orderSummary.js",
    user: "./userDate/user.js",
    helper: "./helper/helper.js",
    file_handler: './helper/file_handler.js',
    email_password_output: './email_password/email_password_output.txt',
    email_password_input: './email_password/email_password_input.txt',
    randomizer: './randomizer/randomizer.js'
  },
  bootstrap: null,
  mocha: {},
  name: "GFL_JSCourse",
};
