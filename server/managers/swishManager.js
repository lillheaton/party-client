const request = require('request-promise');
const swishConfig = require('../../config/swish');

const passphrase = 'swish';
const url = 'https://mss.swicpc.bankgirot.se/swish-cpcapi/api/v1/paymentrequests/';
const headers = {
	'Content-Type': 'application/json'
};

module.exports = {

	payment: async (body) => {
		let { cert, ca } = swishConfig.get();

		try{
			let response = await request({
				method: 'POST',
				pfx: cert,
				ca: ca,
				passphrase,
				url: url,
				headers,
				body: body,
				json: true,
				resolveWithFullResponse: true
			});

			return Promise.resolve(response);
		} 
		catch(error) {

			console.log("Error!!!!");
			return false;
		}
	}
};