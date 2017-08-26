import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Details({ navigator }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Button title="Pop Screen" onPress={() => navigator.pop()} color="blue" />
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
