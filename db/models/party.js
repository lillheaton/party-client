const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('party', {
	id: { 
		type: Sequelize.UUID, 
		primaryKey: true, 
		defaultValue: Sequelize.UUIDV4 
	},
	
	facebookEventId: { 
		type: Sequelize.STRING, 
		allowNull: false, 
		field: "facebook_event_id" 
	},

	name: { 
		type: Sequelize.STRING, 
		allowNull: false 
	},
	
	cost: Sequelize.INTEGER,
	json: Sequelize.JSON
});