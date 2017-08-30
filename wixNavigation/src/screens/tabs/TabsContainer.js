import { Component } from 'react';

class TabsContainer extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: 'blue',
    navBarTextColor: 'white',
    topTabTextColor: 'rgba(255, 255, 255, 0.7)',
    selectedTopTabTextColor: 'white',
    // Tab indicator
    selectedTopTabIndicatorHeight: 6,
    selectedTopTabIndicatorColor: 'pink',
  };
}

export default TabsContainer;
