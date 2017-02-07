const log = require('../log')('PartyClient.Router');
const db = require('./index');
const { databaseDevMode } = require('../config');
const assignment = require('./models/assignment');
const transaction = require('./models/transaction');

module.exports.setup = async () => {
	await assignment.sync({force: databaseDevMode});
	await transaction.sync({force: databaseDevMode});
};

module.exports.checkConnection = async () => {
	try {
		await db.authenticate();
		return true;
	}
	catch(error) {
		log.error(error, 'Could not connect to the SQL server');
		process.exit(1);
	}
};