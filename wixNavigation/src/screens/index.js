import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Home from './Home';
import Details from './Details';
import Login from './Login';
import About from './About';
import Drawer from '../components/Drawer';
import TabsContainer from './tabs/TabsContainer';
import TabContent from './tabs/TabContent';
import Modal from '../components/Modal';
import withDrawer from '../hoc/withDrawer';
import { screens } from '../constants';

export default function registerScreens() {
  Navigation.registerComponent(screens.home, () =>
    withDrawer(screens.home)(Home),
  );
  Navigation.registerComponent(screens.details, () => Details);
  Navigation.registerComponent(screens.login, () => Login);
  Navigation.registerComponent(screens.about, () =>
    withDrawer(screens.about)(About),
  );
  Navigation.registerComponent(screens.drawer, () => Drawer);

  Navigation.registerComponent(screens.modal, () => Modal);

  if (Platform.OS === 'android') {
    Navigation.registerComponent(screens.tabsContainer, () => TabsContainer);
    Navigation.registerComponent(screens.tabsContent, () =>
      withDrawer(screens.tabsContainer)(TabContent),
    );
  }
}
