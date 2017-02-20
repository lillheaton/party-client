import logger from '../../../log';
import { merge, map } from 'lodash';
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
                return await FB.get(`/${id}?fields=attending_count,description,name,place,start_time,interested_count`);
            }
            catch(error){
                log.error(error);
            }
        }
    },

    FBEvent: {
        async attending(event) {
            try{
                let response = await FB.get(`/${event.id}/attending`);
                return map(response.data, (val) => {
                    return merge(val, { picture: `//graph.facebook.com/${val.id}/picture` });
                });
            }
            catch(error){
                log.error(error);
            }
        },

        async interested(event) {
            try{
                let response = await FB.get(`/${event.id}/interested`);
                return map(response.data, (val) => {
                    return merge(val, { picture: `//graph.facebook.com/${val.id}/picture` });
                });
            }
            catch(error){
                log.error(error);
            }
        }
    },

    Mutation: {
        async attendEvent(_, { eventId }, context) {
            if(!context.facebookToken)
                throw 'No access token found';

            FB.setAccessToken(context.facebookToken);

            try{
                return await FB.post(`/${eventId}/attending`);
            } catch(error){
                log.error(error);
            }
        }
    }
};

export default resolveFunctions;