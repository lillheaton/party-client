const Router = require('koa-router');
const compose = require('koa-compose');
const log = require('../../log')('PartyClient.Swish');
const swishManager = require('../managers/swishManager');

module.exports.createRoutes = () => {
	var router = new Router();

	router.post('/pay', async (ctx, next) => {
		log.info(ctx.request.body);

		let json = ctx.request.body;

		let response = await swishManager.payment({
			callbackUrl: `https://${ctx.host}/api/swish/callback`,
			payeeAlias: json.payeeAlias,
			amount: json.amount,
			currency: json.currency
		});

		log.info(response.headers);

		ctx.body = response;
	});

	router.post('/callback', (ctx, next) => {
		log.info(ctx.request.body);
		ctx.body = "OK";
	});

	return router.routes();
}