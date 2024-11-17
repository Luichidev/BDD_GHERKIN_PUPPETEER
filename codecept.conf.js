exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://test.taonet.es',
      show: true,
      windowSize: '1920x1080',
      waitForNavigation: "networkidle2",
      waitForTimeout: 1000,

    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
    homePage: './pages/homePage.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/loginSteps.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    stepByStepReport: {
      enabled: true,
       screenshotsForAllureReport: true,
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'BDD_Gherkin_puppeteer'
}