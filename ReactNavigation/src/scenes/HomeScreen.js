/* @flow */

import React, { Component } from 'react';
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigationOptions }) => ({
    headerTitle: 'Home',
    headerRight: (
      <Button
        color={Platform.OS === 'android' ? "#3F51B5" : "#FFFFFF"}
        onPress={() => {}}
        title="Log out"
      />
    ),
    headerStyle: {
      ...navigationOptions.headerStyle,
      paddingRight: Platform.OS === 'android' ? 16 : 0,
    },
  });

  pushDetailScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('Detail', { id: 100, title: 'Hello!' });
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
        <Button
          color={Platform.OS === 'android' ? "#3F51B5" : "#007aff"}
          onPress={this.pushDetailScreen}
          title="Push screen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
