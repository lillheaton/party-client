const env = require('../config/env');
const log = require('../log')('PartyClient.Router');
const Koa = require('koa');
const koaBodyParser = require('koa-bodyparser');
const api = require('./api');

const app = new Koa();

app.use(koaBodyParser());

if(env.DEVELOPMENT){
	app.use(async (ctx, next) => {
		const start = new Date();
		await next();

		const ms = new Date() - start;
		log.info(`${ctx.method} ${ctx.url} - ${ms}ms`);	
	});	
}

app.use(api.createRoutes());

module.exports = app;	