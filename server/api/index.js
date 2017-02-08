import Router from 'koa-router';
import compose from 'koa-compose';
import transactionController from './transactionController';

export default {
	createRoutes: () => {
		var router = new Router({
			prefix: '/api'
		});

		router.use('/transaction', transactionController.createRoutes());

		return compose([
			router.routes(),
			router.allowedMethods()
		]);
	}
};