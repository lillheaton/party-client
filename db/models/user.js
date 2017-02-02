const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('user', {
	id: { 
		type: Sequelize.UUID, 
		primaryKey: true, 
		defaultValue: Sequelize.UUIDV4 
	},

	facebookId: { 
		type: Sequelize.STRING, 
		allowNull: false, 
		unique: true,
		field: "facebook_id" 
	},

	name: { 
		type: Sequelize.STRING, 
		allowNull: false 
	}
});