import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './store/createStore';
import createRoutes from './routes';
import AppContainer from './containers/AppContainer';
import './style';

const store = window.store = createStore();
const routes = createRoutes(store);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer
    history={history}
    routes={routes}
    store={store}
  />,
  document.getElementById('root')
);
