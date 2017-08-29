import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { BackHandler } from 'react-native';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { screens } from '../constants';

const withDrawer = screenId => WrappedComponent => {
  class EnhancedComponent extends Component {
    constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(
        this.onNavigatorEvent.bind(this),
      );
    }

    componentDidMount() {
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.handleBackButtonPress,
      );
    }

    componentWillUnmount() {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButtonPress,
      );
    }

    handleBackButtonPress = () => {
      if (screenId !== screens.home) {
        this.props.navigator.resetTo({
          screen: screens.home,
          title: 'Home',
        });
        return true;
      }
      return false;
    };

    /**
     * If you have multiple navigation buttons in your root screens, we could consider getting away from this HoC, since it
     * won't be that reusable and instead, listening to navigator events per screen (inside Home and About) in this case.
     */
    onNavigatorEvent = event => {
      if (event.type === 'DeepLink' && event.link !== screenId) {
        this.props.navigator.resetTo({
          screen: event.link,
          title: event.payload,
        });
      } else if (
        event.type === 'NavBarButtonPress' &&
        screenId === screens.home
      ) {
        if (event.id === 'logout') {
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
        }
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatic(EnhancedComponent, WrappedComponent);
};

export default withDrawer;
