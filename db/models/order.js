const Sequelize = require('sequelize');
const db = require('../index');

const user = require('./user');
const party = require('./party');

module.exports = db.define('order', {
	id: { 
		type: Sequelize.UUID, 
		primaryKey: true, 
		defaultValue: Sequelize.UUIDV4 
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
	
	name: { 
		type: Sequelize.STRING, 
		allowNull: false 
	},

	type: { 
		type: Sequelize.STRING, 
		allowNull: false 
	},
	
	paymentMessage: { type: Sequelize.TEXT, field: 'payment_message' }
});
