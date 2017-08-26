import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Home({ navigator }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Push Screen"
        onPress={() =>
          navigator.push({
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

Home.navigatorStyle = {
  navBarBackgroundColor: 'rgb(255, 0, 0)',
  navBarTextColor: '#FFFFFF',
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
