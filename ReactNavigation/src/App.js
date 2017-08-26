/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#f12426"
          barStyle="light-content"
        />
        <Text style={styles.welcome}>
          Welcome to React Navigation!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const ReactNavigation = StackNavigator({
  Home: {
    screen: HomeScreen,
  }},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f74c4f'
      },
      headerTintColor: '#FFFFFF',
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNavigation', () => ReactNavigation);
