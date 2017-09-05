import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
    </View>
  );
}

About.navigatorStyle = {
  navBarBackgroundColor: 'rgb(255, 0, 0)',
  navBarTextColor: '#FFFFFF',
  navBarButtonColor: 'white',
};

About.navigatorButtons = {
  leftButtons: [
    {
      id: 'sideMenu',
    },
  ],
};

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
