import logger from '../../../log';
import { merge } from 'lodash';
import FB from '../../managers/fb';

const log = logger(__filename);

const resolveFunctions = {
	Query: {
		async profile(_, { id }, context) {
			if(!context.facebookToken)
				throw 'No access token found';

			FB.setAccessToken(context.facebookToken);

			try{
				let response = await FB.get('/' + id);
				return merge(response, { picture: `//graph.facebook.com/${response.id}/picture` });
			}
			catch (error){
				log.error(error);
			}
		},

		async fbEvent(_, { id }, context){
			if(!context.facebookToken)
				throw 'No access token found';

			FB.setAccessToken(context.facebookToken);

			try {	
				return await FB.get(`/${id}?fields=attending_count,description,name,place,start_time,interested_count,attending{name}`);
			}
			catch(error){
				log.error(error);
			}
		}
	},

	FBEvent: {
		async attending(event){			
			return event.attending.data;
		}
	}
};

export default resolveFunctions;