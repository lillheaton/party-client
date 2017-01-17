const { readFileSync } = require('fs');
const { join } = require('path')
const request = require('request-promise');

const cert = readFileSync(join(__dirname, 'Swish Merchant Test Certificate 1231181189.p12'));
const ca = readFileSync(join(__dirname, 'Test Swish Root CA v1 Test.pem'));
const passphrase = 'swish';
const url = 'https://mss.swicpc.bankgirot.se/swish-cpcapi/api/v1/paymentrequests/';

const headers = {
	'Content-Type': 'application/json'
};

module.exports = {

	payment: async (body) => {
		try{
			let response = await request({
				method: 'POST',
				pfx: cert,
				ca,
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