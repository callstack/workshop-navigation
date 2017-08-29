/**
 * @flow
 */

import React from 'react';
import {
  Platform,
} from 'react-native';
import { addNavigationHelpers, DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
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

const App = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);
export default AppWithNavigationState;