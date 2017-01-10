const bunyan = require('bunyan');

module.exports = (name) => {
	return bunyan.createLogger({
		name,
		level: 'debug',
		stream: process.stdout,
		serializer: {
			req: ({ url, method }) => ({ url, method })
		}
	});
};