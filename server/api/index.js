const Router = require('koa-router');
const compose = require('koa-compose');

module.exports.createRoutes = () => {
	var router = new Router({
		prefix: "/api"
	});

	router.get('/test', (ctx, next) => {
		ctx.body = "Hello world";
	});

	return compose([
		router.routes(),
		router.allowedMethods()
	]);
};