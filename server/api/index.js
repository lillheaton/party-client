const Router = require('koa-router');
const compose = require('koa-compose');
const swish = require('./swish');

module.exports.createRoutes = () => {
	var router = new Router({
		prefix: "/api"
	});

	router.get('/test', (ctx, next) => {
		ctx.body = "Hello world";
	});

	// Swish section
	router.use('/swish', swish.createRoutes());

	return compose([
		router.routes(),
		router.allowedMethods()
	]);
};