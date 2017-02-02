const Sequelize = require('sequelize');
const db = require('../index');

const user = require('./user');
const party = require('./party');

module.exports = db.define('transaction', {
	id: { 
		type: Sequelize.INTEGER, 
		primaryKey: true, 
		autoIncrement: true
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
		unique: true,		
		field: 'swish_payment_reference'
	},

	payerAlias:{
		type: Sequelize.STRING,
		field: 'payer_alias'
	},

	name: { 
		type: Sequelize.STRING, 
		allowNull: false 
	},

	type: { 
		type: Sequelize.STRING, 
		allowNull: false 
	},
	
	paymentMessage: { type: Sequelize.TEXT, field: 'payment_message' },
	amount: Sequelize.INTEGER,
	status: Sequelize.STRING,
	datePaid: { type: Sequelize.DATE, field: 'date_paid' },
	errorCode: { type: Sequelize.TEXT, field: 'error_code' },
	errorMessage: {type: Sequelize.TEXT, field: 'error_message' }
});