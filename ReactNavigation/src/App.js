/**
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomeStack from './scenes/Home';
import LoginScreen from './scenes/LoginScreen';
import SecondScreen from './scenes/SecondScreen';
import ThirdScreen from './scenes/ThirdScreen';

const DrawerStack = DrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  SecondScreen: {
    screen: SecondScreen,
  },
  ThirdScreen: {
    screen: ThirdScreen,
  },
  }, {
    initialRouteName: 'Home',
  },
);

const ReactNavigation = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Drawer: {
    screen: DrawerStack,
  },
}, {
  initialRouteName: 'Drawer',
  navigationOptions: {
    header: null,
  }
});

AppRegistry.registerComponent('ReactNavigation', () => ReactNavigation);
