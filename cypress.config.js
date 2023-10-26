const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/tests/*', 
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login ',
    setupNodeEvents(on, config) {
      // allureWriter(on, config);
      // return config;
    },
  },

  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    allureReuseAfterSpec: true
  }
  
});
