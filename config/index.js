const { env } = process

module.exports = {
  port: env.PORT || 3000,
  databaseConnectionString: env.DATABASE_URL || 'postgres://postgres:Password123@localhost/party-client',
  swishPayeeAlias: env.SWISH_PAYEE_ALIAS || '1231181189'
};