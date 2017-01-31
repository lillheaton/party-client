const Sequelize = require('sequelize');
const { databaseConnectionString } = require('../config');

module.exports = new Sequelize(databaseConnectionString);