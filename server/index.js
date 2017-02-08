import logger from '../log';
import env from '../config/env';
import Koa from 'koa';
import koaBodyParser from 'koa-bodyparser';
import api from './api';

const log = logger(__filename);
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

export default app;