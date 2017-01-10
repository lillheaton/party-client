const { NODE_ENV } = process.env;

module.exports = {
	DEVELOPMENT: NODE_ENV === 'development',
	PRODUCTION: NODE_ENV === 'production'
};