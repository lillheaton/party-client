const Sequelize = require('sequelize');
const db = require('../index');

const order = require('./order');
const user = require('./user');
const party = require('./party');

module.exports = db.define('transaction', {
	id: { 
		type: Sequelize.UUID, 
		primaryKey: true, 
		defaultValue: Sequelize.UUIDV4 
	},

	orderId: {
		type: Sequelize.UUID,
		field: "order_id",
		references: {
			model: party,
			key: 'id'
		}
	},

	userId: { 
		type: Sequelize.UUID,
		field: "user_id",
		references: { 
			model: user,
			key: 'id'
		}  
	},

	partyId: {
		type: Sequelize.UUID,
		field: "party_id",
		references: {
			model: party,
			key: 'id'
		}
	},

	swishPaymentReference: {
		type: Sequelize.STRING,
		field: 'swish_payment_reference'
	},

	payerAlias:{
		type: Sequelize.STRING,
		field: 'payer_alias'
	},

	amount: Sequelize.INTEGER,
	status: Sequelize.STRING,
	datePaid: { type: Sequelize.DATE, field: 'date_paid' },
	errorCode: { type: Sequelize.TEXT, field: 'error_code' },
	errorMessage: {type: Sequelize.TEXT, field: 'error_message' }
});