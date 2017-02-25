import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducers from '../reducers';

const middleware = routerMiddleware(browserHistory);

export default () => {
    return createStore(
        combineReducers({
            ...reducers,
            routing: routerReducer
        }),
        applyMiddleware(middleware)
    );
};