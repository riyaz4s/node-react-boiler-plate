// Do not use let here; it breaks uglify

const obj = {};
try {
  obj.config = JSON.parse(new Buffer(window.__CONFIG__, 'base64').toString('utf-8'));
}
catch(error) {
  obj.config = {};
}

delete window.__CONFIG__;

export default obj.config;