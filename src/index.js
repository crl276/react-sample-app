import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore } from 'redux';
import { applyMiddleware, createStore } from 'redux';

const defaultState = {
	appName: 'conduit',
	articles: null
};

const reducer = function(state = defaultState, action) {
	return state;
};



ReactDOM.render((
  <Provider store={store}>
  	<App />
  </Provider>
), document.getElementById('main'));
