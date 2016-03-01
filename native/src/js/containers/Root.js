import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import App from './App';

export default class Root extends Component {
  render() {
    const store = configureStore(window.__INITIAL_STATE__);
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}