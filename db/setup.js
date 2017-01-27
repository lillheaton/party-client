const db = require('./index');
const user = require('./models/user');
const party = require('./models/party');
const order = require('./models/order');
const partySignup = require('./models/partySignup');
const transaction = require('./models/transaction');

module.exports.setup = async () => {
	try{
		await user.sync();
		await party.sync();
		await order.sync();
		await partySignup.sync();
		await transaction.sync();
	}
	catch(error){
		console.log(error);
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
