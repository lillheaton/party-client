import logger from '../../../log';
import { merge } from 'lodash';
import FB from '../../managers/fb';

const log = logger(__filename);

const resolveFunctions = {
	Query: {
		async profile(_, { id }, context) {
			FB.setAccessToken(context.facebookToken);

			try{
				let response = await FB.get('/' + id);
				return merge(response, { picture: `//graph.facebook.com/${response.id}/picture` });
			}
			catch (error){
				log.error(error);
			}
		}
	}
};

export default resolveFunctions;