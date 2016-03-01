import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import App from './App';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}