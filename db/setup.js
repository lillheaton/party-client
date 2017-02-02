const db = require('./index');
const { databaseDevMode } = require('../config');
const user = require('./models/user');
const party = require('./models/party');
const partySignup = require('./models/partySignup');
const transaction = require('./models/transaction');

module.exports.setup = async () => {
	await user.sync({force: databaseDevMode});
	await party.sync({force: databaseDevMode});
	await partySignup.sync({force: databaseDevMode});
	await transaction.sync({force: databaseDevMode});

	if(databaseDevMode){
		// Setup a fake user for testing
		let [devUser, userCreated] = await user.findOrCreate({where: { facebookId: 'fake_user_test_id'}, defaults: { name: 'DevUser' }});
		let [devParty, partyCreated] = await party.findOrCreate({where: { facebookEventId: 'fake_test_id'}, defaults: { name: 'DevParty', cost: 200 }});

		let [devPartySignup, partySignupCreated] = await partySignup.findOrCreate({
			where: { userId: devUser.dataValues.id, partyId: devParty.dataValues.id }, 
			defaults: { userId: devUser.dataValues.id, partyId: devParty.dataValues.id }
		});
	}
};

module.exports.checkConnection = async () => {
	try {
		await db.authenticate();
		return true;
	}
	catch(error){
		console.log(error);
		throw "Could not connect to the SQL server";
	}
}