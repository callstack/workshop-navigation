/**
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './scenes/HomeScreen';
import DetailScreen from './scenes/DetailScreen';
import LoginScreen from './scenes/LoginScreen';

const ReactNavigation = StackNavigator({
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: DetailScreen,
    }},
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f74c4f'
      },
      headerTintColor: '#FFFFFF',
    }
  }
);

AppRegistry.registerComponent('ReactNavigation', () => ReactNavigation);
