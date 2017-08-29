import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Details from './Details';
import Login from './Login';
import About from './About';
import Drawer from '../components/Drawer';
import withDrawer from '../hoc/withDrawer';
import { screens } from '../constants';

export default function registerScreens() {
  Navigation.registerComponent(screens.home, () => withDrawer(screens.home)(Home));
  Navigation.registerComponent(screens.details, () => Details);
  Navigation.registerComponent(screens.login, () => Login);
  Navigation.registerComponent(screens.about, () => withDrawer(screens.about)(About));
  Navigation.registerComponent(screens.drawer, () => Drawer);
}
