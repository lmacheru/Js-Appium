var config = {
    commanCapabilities: {
      'browserstack.local' : true,
      'browserstack.user' : 'nolo1',
      'browserstack.key' : 'hasoni1WRqqhcWzabvR8',
      'build': 'mocha-browserstack',
      'name': 'parallel_test',
      'browserstack.debug': 'true',
    },
    'multiCapabilities': [{
        device: 'Google Pixel'
      }, {
        device: 'Google Nexus 6'
      }]
  };
  
  exports.capabilities = [];
  // Code to support common capabilities
  config.multiCapabilities.forEach(function(caps) {
    var temp_caps = JSON.parse(JSON.stringify(config.commanCapabilities));
    for(var i in caps) temp_caps[i] = caps[i];
    exports.capabilities.push(temp_caps);
  });
