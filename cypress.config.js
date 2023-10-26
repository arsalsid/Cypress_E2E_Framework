const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login ',
    specPattern: 'cypress/e2e/tests/*', 
    setupNodeEvents(on, config) {
    },
  },

  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    allureReuseAfterSpec: true
  }
  
});
