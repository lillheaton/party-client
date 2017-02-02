require('babel-polyfill');

const config = require('./config');
const env = require('./config/env');
const server = require('./server');
const dbSetup = require('./db/setup');
const log = require('./log')('PartyClient');
const user = require('./db/models/user');


dbSetup.checkConnection();
dbSetup.setup();

/*
var testUser = user.create({
	facebookId: 'test',
	name: 'Kalle'
}).then(s => {
	console.log(s.dataValues);
});
*/

server.listen(config.port, () => log.info({port: config.port}, 'Server started'));