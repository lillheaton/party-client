const Router = require('koa-router');
const compose = require('koa-compose');
const transaction = require('./transaction');

module.exports.createRoutes = () => {
	var router = new Router({
		prefix: "/api"
	});

	router.use('/transaction', transaction.createRoutes());

	return compose([
		router.routes(),
		router.allowedMethods()
	]);
};