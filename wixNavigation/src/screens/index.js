import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Details from './Details';
import Login from './Login';

export default function registerScreens() {
  Navigation.registerComponent('wixNavigation.home', () => Home);
  Navigation.registerComponent('wixNavigation.details', () => Details);
  Navigation.registerComponent('wixNavigation.login', () => Login);
}
