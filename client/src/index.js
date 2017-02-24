import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';
import './style';

const store = window.store = createStore();

ReactDOM.render(
  <AppContainer
    history={browserHistory}
    store={store}
  />,
  document.getElementById('root')
);
