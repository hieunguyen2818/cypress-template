const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.ts",
    baseUrl: 'https://todoist.com/',
  },

  env: {
    hideXhr: true,
    grepFilterSpecs: true,
    
    QA: {
      baseUrl: 'https://todoist.com/',
      userName: 'admin',
      passWord: 'Password1@'
    },
  },

  defaultCommandTimeout: 100000,
  pageLoadTimeout: 100000,
  viewportWidth: 1920, // Kích thước chiều rộng mặc định
  viewportHeight: 1080, // Kích thước chiều cao mặc định

});
