import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import contentfulResolver from './contentful/resolver';
import contentfulScheme from './contentful/schema';

import facebookResolver from './facebook/resolver';
import facebookScheme from './facebook/schema';

const schema = `
# the schema allows the following query:
type Query {
  party(id: String!): Party
  parties: [Party]
  profile(id: String!): Profile
}
`;

export default makeExecutableSchema({
	typeDefs: [schema, contentfulScheme, facebookScheme],
	resolvers: merge(facebookResolver, contentfulResolver)
});