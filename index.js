import 'babel-polyfill';

import config from './config';
import server from './server';
import dbSetup from './db/setup';
import { setup as swishSetup } from './config/swish';
import logger from './log';

const log = logger(__filename);

dbSetup.checkConnection()
	.then(() => dbSetup.setup())
	.then(() => swishSetup())
	.then(() => server.listen(config.port, () => log.info({port: config.port}, 'Server started')));