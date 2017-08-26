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
            },
          })}
        color="blue"
      />
    </View>
  );
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
