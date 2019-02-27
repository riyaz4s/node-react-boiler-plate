'use strict';
const config = require('../config');

const clientConfig = {
  clientBaseURL: 'http:localhost:5002',
  appBaseURL: config.appBaseURL,
  appRoute: config.appRoute,
};

module.exports = function(request, response, next) {
  const tokens = {
    appRoute: config.appRoute, //Config for layouts,
    config: new Buffer(JSON.stringify(clientConfig)).toString('BASE64')
  };
  request.tokens = tokens;
  return next();
};
