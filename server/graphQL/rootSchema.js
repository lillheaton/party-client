import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import contentfulResolvers from './contentful/resolver';
import contentfulScheme from './contentful/schema';

const schema = `
# the schema allows the following query:
type Query {
  party(id: String!): Party
  parties: [Party]
}
`;

export default makeExecutableSchema({
	typeDefs: [schema, contentfulScheme],
	resolvers: merge({}, contentfulResolvers)
});