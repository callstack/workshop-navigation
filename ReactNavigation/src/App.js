/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './scenes/HomeScreen';
import DetailScreen from './scenes/DetailScreen';

const ReactNavigation = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  }}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f74c4f'
    },
    headerTintColor: '#FFFFFF',
  }
  }
);

AppRegistry.registerComponent('ReactNavigation', () => ReactNavigation);
