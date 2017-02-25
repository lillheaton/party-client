import root from './root';
import party from './party';

export default (store) => ({
    path: '/',
    indexRoute: root(store),
    childRoutes: [
        party(store)
    ]
});