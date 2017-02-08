import Sequelize from 'sequelize';
import logger from '../log';
import { databaseConnectionString } from '../config';

const log = logger(__filename);

export default new Sequelize(databaseConnectionString, { logging: log.debug.bind(log) });