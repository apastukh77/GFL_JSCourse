const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',//["chromium", "firefox"]
      waitForNavigation: 'networkidle0',
      waitForTimeout: 20000,
      timeout: 20000,
     // windowSize: '1900x1000',
    }, 
    ChaiWrapper:{
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authenticationPage: './pages/authentication.js',
    createAccountPage: './pages/createAccount.js',
    myAccountPage: './pages/myAccount.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'GFL_JSCourse'
}