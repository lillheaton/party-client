const { env } = process

module.exports = {
  port: env.PORT || 3000,
  database: {
  	host: 'localhost',
  	name: 'party-client',
  	username: 'postgres',
  	password: 'Password123'
  }
};