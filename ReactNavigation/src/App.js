/**
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeStack from './scenes/Home';
import LoginScreen from './scenes/LoginScreen';
import SecondScreen from './scenes/SecondScreen';
import ThirdScreen from './scenes/ThirdScreen';

const DrawerStack = TabNavigator({
  Home: {
    screen: HomeStack,
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
  },
}, {
  initialRouteName: 'Drawer',
  navigationOptions: {
    header: null,
  }
});

AppRegistry.registerComponent('ReactNavigation', () => ReactNavigation);
