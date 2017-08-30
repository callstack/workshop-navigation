/* @flow */

import React, { Component } from 'react';
import { AppRegistry, Linking, Platform } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import App, { AppNavigator } from './App';

const store = configureStore(AppNavigator);

class Root extends Component {
  state = {
    isLinkingChecked: false,
  };

  componentDidMount() {
    const { isLinkingChecked } = this.state;
    if (!isLinkingChecked) {
      Linking.getInitialURL().then(url => {
        this.handleLinking(url);
        this.setState({ isLinkingChecked: true });
      });
    }

    if (Platform.OS === 'ios') {
      Linking.addEventListener('url', this.handleUrlIos);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      Linking.removeEventListener('url', this.handleUrlIos);
    }
  }

  handleUrlIos = (event) => {
    this.handleLinking(event.url);
  };

  handleLinking = (url) => {
    if (url) {
      store.dispatch({
        type: 'LINKING',
        url,
      });
    }
  };

  render() {
    const { isLinkingChecked } = this.state;
    if (!isLinkingChecked) {
      return null;
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNavigation', () => Root);
