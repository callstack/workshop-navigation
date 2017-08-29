import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens/index';
import { screens } from './src/constants';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: screens.login,
  },
  drawer: {
    left: {
      screen: screens.drawer,
    },
  },
});
