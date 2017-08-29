/* @flow */

import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailScreen from '../DetailScreen';

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
    // Deep linking example: adb shell am start -W -a android.intent.action.VIEW -d "navigation://navigation/home/home/detail/978" com.reactnavigation
    path: 'detail/:id/'
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f74c4f',
      paddingRight: Platform.OS === 'android' ? 16 : 0,
    },
    headerTintColor: '#FFFFFF',
  },
});

export default HomeStack;