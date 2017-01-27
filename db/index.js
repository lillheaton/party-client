const Sequelize = require('sequelize');
const { database } = require('../config');

module.exports = new Sequelize(database.name, database.username, database.password, {
	host: database.host,
	dialect: 'postgres'
});