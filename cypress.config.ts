import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    env: {
      url: 'https://staging.powerus.de/',
    },

    retries: {
      runMode: 1
    },
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  },
});
