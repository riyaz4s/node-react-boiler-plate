import axios from 'axios';
import config from 'client/javascripts/config';

const http = axios.create({
  baseURL: config.appRoute,
  headers: {
    Accept: 'application/json'
  },
  maxContentLength: 1024 * 1024 * 20,
  timeout: config.serviceTimeout
});

/* istanbul ignore next */
http.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default http;
