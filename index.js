const server = require('./src/server');

if (!module.parent) server.start();


module.exports = server;
