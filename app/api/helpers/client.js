'use strict';
const Joi = require('joi');
const humps = require('humps');
const _ = require('lodash');
const config = require('../../config');
const https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: false
});

const axios = require('axios').create({
  httpsAgent: agent,
  timeout: config.serviceTimeout,
  maxContentLength: 1024 * 1024 * 40
});


const internals = {};

const get = function (options, context) {
  return doHttpRequest('get', options, null, context);
};

const post = function(options, body, context) {
  return doHttpRequest('post', options, body, context);
};

const patch = function(options, body, context) {
  return doHttpRequest('patch', options, body, context);
};

const put = function(options, body, context) {
  return doHttpRequest('put', options, body, context);
};


const doHttpRequest = function(method, options, body, context) {
  return new Promise((resolve, reject) => {
    const validation = Joi.validate(options, internals.postSchema, {allowUnknown: true});
    if (validation.error) {
      return reject(validation.error);
    }

    const requestDetails = {
      method,
      url: options.url,
      params: options.params,
      headers: getHeaders(options.headers)
    };

    if((options).responseType){
      requestDetails.responseType = options.responseType;
    }

    if (body) {
      requestDetails.data = humps.decamelizeKeys(body);
    }

    axios(requestDetails)
      .then(response => {
        if((options).responseType === 'stream') resolve(response.data);
        else resolve((response.data));
      })
      .catch(err => {
        if (err) {
          err.config = undefined;
          err.request = undefined;
        }
        if (err.response) {
          if(typeof err.response === 'object') {
            err.response.config = undefined;
            err.response.request = undefined;
          }
        }
        if(err) {
          err.message = `${err.message}; happened for ${requestDetails.method ? requestDetails.method.toUpperCase() : ''} ${requestDetails.url}`;
        }
        reject(err);
      });
  });
};

const getHeaders = headers => {
  return _.defaults(headers, {
    'content-type': 'application/json'
  });
};

internals.postSchema =  Joi.object().keys({
  url: Joi.string().min(1).required(),
  headers: Joi.object()
});

internals.getSchema =  Joi.object().keys({
  url: Joi.string().min(1).required(),
  headers: Joi.object()
});

module.exports.get = get;
module.exports.post = post;
module.exports.patch = patch;
module.exports.put = put;
module.exports.getHeaders = getHeaders;
