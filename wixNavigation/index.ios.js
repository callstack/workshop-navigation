import { Navigation } from 'react-native-navigation';

import registerScreens from './src/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'wixNavigation.login',
  },
});
