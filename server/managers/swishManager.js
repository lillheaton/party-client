import logger from '../../log';
import request from 'request-promise';
import { get as getSwishConfig } from '../../config/swish';

const log = logger(__filename);
const passphrase = 'swish';
const url = 'https://mss.swicpc.bankgirot.se/swish-cpcapi/api/v1/paymentrequests/';
const headers = {
	'Content-Type': 'application/json'
};

export default {

	payment: async (body) => {
		let { cert, ca } = await getSwishConfig();

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
			log.error(error);
			return false;
		}
	}
};