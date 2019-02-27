const httpClient = require('./helpers/client');
const config = require('../config');

module.exports.getSubjectList = () => {
  const url = `${config.clientBaseURL}/subjects`;
  const options = {
    url
  };
  return httpClient.get(options);
};

module.exports.getChapterList = (subject) => {
  const url = `${config.clientBaseURL}/chapters/${subject}`;
  const options = {
    url
  };
  return httpClient.get(options);
};
