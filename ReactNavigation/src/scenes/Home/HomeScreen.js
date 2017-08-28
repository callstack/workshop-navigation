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
import { NavigationActions } from 'react-navigation'

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    headerTitle: 'Home',
    headerRight: (
      <Button
        color={Platform.OS === 'android' ? "#3F51B5" : "#FFFFFF"}
        onPress={() => {
          navigation.dispatch(NavigationActions.reset({
            index: 0,
            // We use null to reset the root navigator
            // See https://github.com/react-community/react-navigation/blob/master/docs/guides/Navigation-Actions.md#reset
            key: null,
            actions: [
              NavigationActions.navigate({ routeName: 'Login' })
            ]
          }));
        }}
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

  openDrawer = () => {
    const { navigation } = this.props;
    navigation.navigate('DrawerOpen');
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
        { Platform.OS === "android" && <View style={styles.separator} /> }
        <Button
          color={Platform.OS === 'android' ? "#3F51B5" : "#007aff"}
          onPress={this.openDrawer}
          title="Open drawer"
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
  separator: {
    marginBottom: 8,
  },
});
