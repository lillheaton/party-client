const { NODE_ENV } = process.env;

export default {
	DEVELOPMENT: NODE_ENV === 'development',
	PRODUCTION: NODE_ENV === 'production'
};