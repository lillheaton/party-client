import { createStore, combineReducers } from 'redux'
import reducers from '../reducers';

export default () => {
    return createStore(combineReducers(reducers));
}