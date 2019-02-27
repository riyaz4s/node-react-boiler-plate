/* eslint-disable no-console */
const axios = require('axios');
const config = require('../app/config');

const isPortAvailable = (port) => axios.get('/', { baseURL: `http://localhost:${port}`})
  .then((res) => false)
  .catch((err) => err.code === 'ECONNREFUSED');


const startServer = (name, port) => isPortAvailable(port).then(isAvailable => {
  if(isAvailable) {
    require(`./${name}`).listen(port);
    console.log(`fake ${name} server started on port ${port}`);
  }
});

startServer('curriculum-service', config.fakeService.port);
