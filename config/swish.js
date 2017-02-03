const fs = require('fs');
const env = require('./env');
const azure = require('azure-storage');

let blobService;
let cert;
let ca;

if(env.PRODUCTION) {
	azure.createBlobService();
}

getBlobFile = (blobFileName, localFileName) => {
	
	return new Promise((resolve, reject) => {

		// First check if the file is already downloaded
		if(fs.existsSync(localFileName)){
			resolve(fs.readFileSync(localFileName));
			return;
		}

		// Download the blob file to a local file
		blobService.getBlobToStream(
			'certs', 
			blobFileName, 
			fs.createWriteStream(localFileName), 
			(error, result, response) => {
				if (!error) {
					resolve(fs.readFileSync(localFileName));
					return;
				}

				reject(error);
		});
	});

};

module.exports.setup = async () => {
	cert = await getBlobFile('Swish Merchant Test Certificate 1231181189.p12', env.DEVELOPMENT === true ? 'dev_swish_cert.p12' : 'swish_cert.p12');
	ca = await getBlobFile('Test Swish Root CA v1 Test.pem', env.DEVELOPMENT === true ? 'dev_swish_ca.pem' : 'swish_ca.pem');
};

module.exports.get = () => {
	if(cert == null || ca == null){
		throw "You must call .setup() before getting the values";
	}

	return { cert, ca };
}