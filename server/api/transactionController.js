import logger from '../../log';
import Router from 'koa-router';
import { swishPayeeAlias } from '../../config';
import swishManager from '../managers/swishManager';
import transaction from '../../db/models/transaction';

const log = logger(__filename);

export default {
	
	createRoutes: () => {
		var router = new Router();

		router.post('/new', async (ctx) => {
			let json = ctx.request.body;
			log.info(json);

			if(!json.facebookUserId || !json.partyId){
				ctx.throw('No facebookUserId or partyId', 400);
				return;
			}
			
			// Create new transaction with all user information and for what party it's for
			let newTransaction = await transaction.create({
				facebookUserId: json.facebookUserId,
				partyId: json.partyId,
				payerAlias: json.payerAlias,
				username: json.username,
				type: json.type,
				paymentMessage: json.paymentMessage,
				amount: json.amount,
				status: 'CREATED'
			});

			// Send the transaction to Swish
			let response = await swishManager.payment({
				callbackUrl: `https://${ctx.host}/api/transaction/callback`,
				payeeAlias: swishPayeeAlias, // Our swish alias number
				payeePaymentReference: newTransaction.dataValues.id, // The payment reference will be returned in the swish callback
				payerAlias: json.payerAlias, // Users phone number
				message: json.paymentMessage,
				amount: json.amount, // Because the transaction can be more than just for the party, allow to post the cost payment
				currency: 'SEK' // Swish only accepts SEK
			});

			ctx.body = { StatusCode: response.statusCode, Location: (response.statusCode == 201 ? response.headers.location : '') };
		});



		router.post('/callback', async (ctx) => {
			let json = ctx.request.body;
			log.info(json);

			var transactionData = await transaction.findOne({ where: { id: json.payeePaymentReference } });
			
			await transactionData.updateAttributes({ 
				swishPaymentReference: json.paymentReference,
				status: json.status,
				datePaid: json.datePaid,
				errorCode: json.errorCode,
				errorMessage: json.errorMessage
			});

			ctx.body = 'OK';
		});

		return router.routes();
	}
};