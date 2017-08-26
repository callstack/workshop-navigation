import { Navigation } from 'react-native-navigation';
import Home from './Home';

export default function registerScreens() {
  Navigation.registerComponent('wixNavigation.home', () => Home);
}
