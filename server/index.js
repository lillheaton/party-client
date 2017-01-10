const env = require('../config/env');
const log = require('../log')('PartyClient.Router');
const Koa = require('koa');
const api = require('./api');

const app = new Koa();

if(env.DEVELOPMENT){
	app.use((ctx, next) => {
	  	const start = new Date();

	  	return next().then(() => {
		  	const ms = new Date() - start;
		    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);	
	  	});
	});	
}

app.use(api.createRoutes());

module.exports = app;