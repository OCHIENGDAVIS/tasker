import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import { LOGIN_USER_SUCCESS } from './actions/types';

const store = createStore(reducers, {}, applyMiddleware(thunk));

const token = localStorage.getItem('accessToken');
if (token) {
  console.log(token);
  store.dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: token,
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root')
);
