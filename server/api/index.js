import Router from 'koa-router';
import compose from 'koa-compose';
import { graphqlKoa } from 'graphql-server-koa';
import transactionController from './transactionController';

import schema from '../graphQL/rootSchema';

export default {
	createRoutes: () => {
		var router = new Router({
			prefix: '/api'
		});

		router.post('/graphql', graphqlKoa({ schema }));
		router.use('/transaction', transactionController.createRoutes());

		return compose([
			router.routes(),
			router.allowedMethods()
		]);
	}
};