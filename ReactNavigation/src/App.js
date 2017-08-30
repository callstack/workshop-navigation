/**
 * @flow
 */

import React, { Component } from 'react';
import {
  BackHandler,
  Platform,
} from 'react-native';
import { addNavigationHelpers, DrawerNavigator, NavigationActions, TabNavigator, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import HomeStack from './scenes/Home';
import LoginScreen from './scenes/LoginScreen';
import SecondScreen from './scenes/SecondScreen';
import ThirdScreen from './scenes/ThirdScreen';

const MainNavigator = Platform.OS === 'android' ? DrawerNavigator : TabNavigator;

const DrawerStack = MainNavigator({
  Home: {
    screen: HomeStack,
    path: 'home',
  },
  SecondScreen: {
    screen: SecondScreen,
    navigationOptions: {
      title: 'Second',
    }
  },
  ThirdScreen: {
    screen: ThirdScreen,
    navigationOptions: {
      title: 'Third',
    }
  },
  }, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
  },
);

export const AppNavigator = StackNavigator({
  Drawer: {
    screen: DrawerStack,
    path: 'home',
  },
  Login: {
    screen: LoginScreen,
  },
}, {
  navigationOptions: {
    header: null,
  },
});

class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('backPress', this._handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('backPress', this._handleBackButton);
  }

  _shouldFinish = () =>
    AppNavigator.router.getStateForAction(
      NavigationActions.back(),
      this.props.nav
    ) === this.props.nav;

  _handleBackButton = () => {
    if (this._shouldFinish()) {
      return false;
    }
    const { dispatch } = this.props;
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);
export default AppWithNavigationState;