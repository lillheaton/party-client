import logger from '../../../log';
import { merge, map } from 'lodash';
import contentful from 'contentful';
import { contentfulAccessToken, contentfulSpaceId } from '../../../config';
import assignmentModel from '../../../db/models/assignment';

const log = logger(__filename);
const client = contentful.createClient({
	accessToken: contentfulAccessToken,
	space: contentfulSpaceId
});

const resolveFunctions = {
	Query: {
		// Query for single party
		async party(_, { id }){
			try {

				let response = (await client.getEntries({ 'content_type': 'party', 'sys.id': id })).items[0];
				return merge(response.fields, response.sys);
				
			} 
			catch(error) {
				log.error(error);
			}
		},

		// Query for list of parties
		async parties() {
			try {

				let response = await client.getEntries({ 'content_type': 'party' });
				return map(response.items, (val) => {
					return merge(val.fields, val.sys);
				});

			} 
			catch(error) {
				log.error(error);
			}
			
		}
	},

	// Party can display related assignments
	Party: {
		async assignments(party) {
			try {

				let response = await client.getEntries({ 'content_type': 'party', 'sys.id': party.id });

				return map(response.items[0].fields.assignments, (val) => {
					return merge(val.fields, val.sys);
				});

			} 
			catch(error) {
				log.error(error);
			}
		}
	},

	Assignment: {
		async assignees(assignment){
			try{
				return await assignmentModel.findAll({ where: { refAssignmentId: assignment.id } });
			}
			catch(error){
				log.error(error);
			}
		}
	}
};

export default resolveFunctions;