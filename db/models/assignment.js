const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('assignment', {
	id: { 
		type: Sequelize.UUID, 
		primaryKey: true, 
		defaultValue: Sequelize.UUIDV4 
	},

	facebookId: { 
		type: Sequelize.STRING, 
		allowNull: false,
		field: "facebook_user_id" 
	},

    // Contentful assignment id
    refAssignmentId: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "c_ref_assignment_id"
    }
});