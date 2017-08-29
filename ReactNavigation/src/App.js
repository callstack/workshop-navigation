/**
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Platform,
} from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';

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

const ReactNavigation = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Drawer: {
    screen: DrawerStack,
    path: 'home',
  },
}, {
  initialRouteName: 'Drawer',
  navigationOptions: {
    header: null,
  },
});

const prefix = Platform.OS === 'android' ? 'navigation://navigation/' : 'navigation://';
const MainApp = () => <ReactNavigation uriPrefix={prefix} />;

AppRegistry.registerComponent('ReactNavigation', () => MainApp);
