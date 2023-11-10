const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const optionsWebPack = {
  webpackOptions: require('./webpack.config'),
  watchOptions: {}
};

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      const specPattern = require('./cypress/config/specFiles.json');
      config.specPattern = config.env.specPattern !== undefined ? specPattern[config.env.specPattern] : specPattern['allTests'];

      const file = config.env.file ? config.env.file : 'env.json';
      config.env = require(`./cypress/env/${file}`);

      on('file:preprocessor', webpack(optionsWebPack));

      return config;
    }
  }
});
