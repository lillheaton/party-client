const Router = require('koa-router');
const compose = require('koa-compose');
const log = require('../../log')('PartyClient.Order');
const { swishPayeeAlias } = require('../../config');
const swishManager = require('../managers/swishManager');

const user = require('../../db/models/user');
const party = require('../../db/models/party');
const transaction = require('../../db/models/transaction');

module.exports.createRoutes = () => {
	var router = new Router();


	router.post('/new', async (ctx, next) => {
		let json = ctx.request.body;
		log.info(json);

		if(!json.userId || !json.partyId){
			ctx.throw('No userId or partyId', 400);
			return;
		}

		let userData = await user.findById(json.userId);
		let paryData = await party.findById(json.partyId);

		if(!userData || !paryData){
			ctx.throw('No user or party with that id', 400);
			return;
		}

		// Create new transaction with all user information and for what party it's for
		let newTransaction = await transaction.create({
			userId: json.userId,
			partyId: json.partyId,
			payerAlias: json.payerAlias,
			name: json.name,
			type: json.type,
			paymentMessage: json.paymentMessage,
			amount: json.amount,
			status: "CREATED"
		});

		// Send the transaction to Swish
		let response = await swishManager.payment({
			callbackUrl: `https://${ctx.host}/api/transaction/callback`,
			payeeAlias: swishPayeeAlias, // Our swish alias number
			payeePaymentReference: newTransaction.dataValues.id, // The payment reference will be returned in the swish callback
			payerAlias: json.payerAlias, // Users phone number
			message: json.paymentMessage,
			amount: json.amount, // Because the transaction can be more than just for the party, allow to post the cost payment
			currency: "SEK" // Swish only accepts SEK
		});

		ctx.body = { Status: "OK", Location: (response.statusCode == 201 ? response.headers.location : "") };
	});



	router.post('/callback', async (ctx, next) => {
		let json = ctx.request.body;
		log.info(json);

		var transactionData = await transaction.findOne({ where: { id: json.payeePaymentReference } });
		
		await transactionData.updateAttributes({ 
			status: json.status,
			dataPaid: json.datePaid,
			errorCode: json.errorCode,
			errorMessage: json.errorMessage
		});

		ctx.body = "OK";
	});



	// Temp method, outputs the dev user and party
	router.get('/devOutput', async (ctx, next) => {
		let userData = await user.findOne({ where: { facebookId: 'fake_user_test_id' }});
		let partyData = await party.findOne({ where: { facebookEventId: 'fake_test_id' }});

		ctx.body = { user: userData, party: partyData };
	});

	return router.routes();
}