const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('transaction', {
	id: { 
		type: Sequelize.INTEGER, 
		primaryKey: true, 
		autoIncrement: true
	},

	facebookUserId: { 
		type: Sequelize.STRING,
		field: "facebook_user_id"
	},

	// Contentful Party model ID
	partyId: {
		type: Sequelize.STRING,
		field: "c_ref_party_id"
	},

	swishPaymentReference: {
		type: Sequelize.STRING,
		unique: true,		
		field: 'swish_payment_reference'
	},

	// Swish payer phone-number
	payerAlias:{
		type: Sequelize.STRING,
		field: 'payer_alias'
	},

	username: { 
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