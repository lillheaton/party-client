require('babel-polyfill');

const config = require('./config');
const env = require('./config/env');
const server = require('./server');
const dbSetup = require('./db/setup');
const swishConfig = require('./config/swish');
const log = require('./log')('PartyClient');
const user = require('./db/models/user');

dbSetup.checkConnection()
	.then(dbSetup.setup())
	.then(swishConfig.setup())
	.then(server.listen(config.port, () => log.info({port: config.port}, 'Server started')));