import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class Home extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: 'rgb(255, 0, 0)',
    navBarTextColor: '#FFFFFF',
  };

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Logout',
        id: 'logout',
      },
    ],
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'logout') {
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'wixNavigation.login',
          },
        });
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Button
          title="Push Screen"
          onPress={() =>
            this.props.navigator.push({
              screen: 'wixNavigation.details',
              title: 'Details',
              passProps: {
                id: 100,
                navBarBackgroundColor: 'blue',
              },
            })}
          color="blue"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
  },
});
