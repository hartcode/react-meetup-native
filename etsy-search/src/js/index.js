import '../css/index.css';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import { connectHistory } from 'redux-history'; 
import { createHistory, useQueries } from 'history';

const store = configureStore(window.__INITIAL_STATE__);

//const history = useQueries(createHistory)();
//const unconnectHistory = connectHistory(history, store);


render(
  <Root store={store} />,
  document.getElementById('root')
);
