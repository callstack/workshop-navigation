import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Details from './Details';

export default function registerScreens() {
  Navigation.registerComponent('wixNavigation.home', () => Home);
  Navigation.registerComponent('wixNavigation.details', () => Details);
}
