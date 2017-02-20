import logger from '../../log';
import Router from 'koa-router';
import Serve from 'koa-static';
import { join } from 'path';
import env from '../../config/env';

const log = logger(__filename);
const clientFolder = join(__dirname, '../../client/build');

export default {
    createRoutes: () => {

        if(env.DEVELOPMENT) {
            let router = new Router();
            
            router.get('/', ctx => {
                log.info('Redirecting client to dev server');
                ctx.redirect('http://localhost:3000');
            });

            return router.routes();
        }
        
        return Serve(clientFolder);
    }
};