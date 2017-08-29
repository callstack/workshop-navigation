/* @flow */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import App, { AppNavigator } from './App';

const store = configureStore(AppNavigator);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNavigation', () => Root);
