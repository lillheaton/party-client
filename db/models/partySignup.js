const Sequelize = require('sequelize');
const db = require('../index');

const user = require('./user');
const party = require('./party');

module.exports = db.define('party_signup', {
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
	}
});