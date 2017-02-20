require('dotenv').config();
const { env } = process;

module.exports = {
    port: env.PORT || 3001,
    databaseConnectionString: env.DATABASE_URL || 'postgres://postgres:Password123@localhost/party-client',
    databaseDevMode: env.DATABASE_DEV_MODE || false,
    swishPayeeAlias: env.SWISH_PAYEE_ALIAS || '1231181189',
    contentfulAccessToken: env.CONTENTFUL_ACCESS_TOKEN,
    contentfulSpaceId: env.CONTENTFUL_SPACE_ID
};