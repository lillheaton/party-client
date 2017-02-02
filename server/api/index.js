const Router = require('koa-router');
const compose = require('koa-compose');
const transactionController = require('./transactionController');

module.exports.createRoutes = () => {
	var router = new Router({
		prefix: "/api"
	});

	router.use('/transaction', transactionController.createRoutes());

	return compose([
		router.routes(),
		router.allowedMethods()
	]);
};