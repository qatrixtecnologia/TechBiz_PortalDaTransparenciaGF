const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 800,
  video: true,
  chromeWebSecurity: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: 'cypress/report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'dd-mm-yyyy_HH-MM-ss'
  },
  env: {
    baseUrl: "",
  },
  e2e: {
    defaultCommandTimeout: 9000,
    experimentalRunAllSpecs: true,
    hideXHRInCommandLog: true,
    specPattern: [
      "cypress/e2e/00 - Teste Unitario - API.cy.js",
      "cypress/e2e/01 - Validacoes da API - Licitacoes Gov.cy.js"
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});