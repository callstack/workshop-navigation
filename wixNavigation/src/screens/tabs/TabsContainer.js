import { Component } from 'react';

class TabsContainer extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: 'blue',
    navBarButtonColor: 'white',
    navBarTextColor: 'white',
    topTabTextColor: 'rgba(255, 255, 255, 0.7)',
    selectedTopTabTextColor: 'white',
    // Tab indicator
    selectedTopTabIndicatorHeight: 6,
    selectedTopTabIndicatorColor: 'pink',

    // Those two settings below make the toolbar collapsible when scrolling
    topBarCollapseOnScroll: true,
    navBarHideOnScroll: true,
  };

  static navigatorButtons = {
    leftButtons: [
      {
        id: 'sideMenu',
      },
    ],
  };
}

export default TabsContainer;
