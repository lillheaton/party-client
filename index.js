require('babel-polyfill');

const config = require('./config');
const env = require('./config/env');
const server = require('./server');
const dbSetup = require('./db/setup');
const log = require('./log')('PartyClient');

dbSetup.checkConnection();
dbSetup.setup();

server.listen(config.port, () => log.info({port: config.port}, 'Server started'));