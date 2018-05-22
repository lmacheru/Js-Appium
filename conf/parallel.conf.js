exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'nolo1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'hasoni1WRqqhcWzabvR8',

  updateJob: true,
  specs: [
    './Scripts/cloud.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'parallel_appium_test',
    build: 'webdriver-browserstack',
    browserName: 'android',
    app: 'bs://f20d27c2b6ede25c30bec1a8686c06ab415b8e98',
    'browserstack.debug': true
  },

  capabilities: [{
    device: 'Google Pixel'
  }, {
    device: 'Google Nexus 6'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
