import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer);

import promiseMiddleware from 'redux-promise-middleware';

const composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware(), logger()
)(createStore);


render (
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
