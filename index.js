require('babel-polyfill');

const config = require('./config');
const env = require('./config/env');
const server = require('./server');
const log = require('./log')('PartyClient');

server.listen(config.port, () => log.info({port: config.port}, 'Server started'));