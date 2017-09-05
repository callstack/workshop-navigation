import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class Details extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: 'rgb(255, 0, 0)',
    navBarTextColor: '#FFFFFF',
  };

  constructor(props) {
    super(props);
    this.props.navigator.setStyle({
      navBarBackgroundColor: props.navBarBackgroundColor,
      navBarButtonColor: 'white',
    });
  }

  render() {
    const { navigator, id } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Details Screen for id {id}
        </Text>
        <Button
          title="Pop Screen"
          onPress={() => navigator.pop()}
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
