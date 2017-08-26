/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Detail'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Look ma! I'm another screen</Text>
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
