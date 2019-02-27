const _ = require('lodash');

module.exports.mergeIgnoringUndefined = (A, B) => {
  return _.mergeWith({}, A, B, (a, b) => b === undefined ? a : undefined);
};

module.exports.parseJSON = (data) => {
  let json;
  try {
    json = JSON.parse(data);
  }
  catch(e) {
    json = {};
  }

  return json;
};