const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  viewportWidth: 500,
  viewportHeight: 300,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})
