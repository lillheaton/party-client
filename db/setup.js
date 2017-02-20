import logger from '../log';
import db from './index';
import { databaseDevMode } from '../config';
import assignment from './models/assignment';
import transaction from './models/transaction';

const log = logger(__filename);

const setup = async () => {
    await assignment.sync({force: databaseDevMode});
    await transaction.sync({force: databaseDevMode});
};

const checkConnection = async () => {
    try {
        await db.authenticate();
        return true;
    }
    catch(error) {
        log.error(error, 'Could not connect to the SQL server');
        process.exit(1);
    }
};

export default { setup, checkConnection };