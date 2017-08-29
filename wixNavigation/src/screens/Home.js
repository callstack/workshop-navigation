import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { screens } from '../constants';

export default class Home extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: 'rgb(255, 0, 0)',
    navBarTextColor: '#FFFFFF',
  };

  static navigatorButtons = {
    leftButtons: [
      {
        id: 'sideMenu',
      },
    ],
    rightButtons: [
      {
        title: 'Logout',
        id: 'logout',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Button
          title="Push Screen"
          onPress={() =>
            this.props.navigator.push({
              screen: screens.details,
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
