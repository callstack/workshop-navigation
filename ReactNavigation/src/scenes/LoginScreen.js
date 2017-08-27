/* @flow */

import React, { Component } from 'react';
import { Button, View, Platform, Text, StatusBar, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onLogIn = () => {
    const { navigation } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    });
    navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f12426"/>
        <Text>Inputs here!</Text>
        <Button
          color={Platform.OS === 'android' ? "#3F51B5" : "#007aff"}
          onPress={this.onLogIn}
          title="Login"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
