/* @flow */

import React, { Component } from 'react';
import { Button, View, Platform, Text, StyleSheet } from 'react-native';

export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const title =  navigation.state.params.title;
    return {

      title: `Detail${title ? ` - ${title}` : ''}`
    }
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const { id } = navigation.state.params;

    return (
      <View style={styles.container}>
        <Text>Look ma! I'm another screen</Text>
        <Text>{id}</Text>
        <Button
          color={Platform.OS === 'android' ? "#3F51B5" : "#007aff"}
          onPress={this.goBack}
          title="Pop screen"
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
