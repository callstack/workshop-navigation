import React from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Text, Button } from 'react-native';

export default function Modal({ id }) {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 16,
      }}
    >
      <Text>Hey, I am a modal with id: {id}</Text>
      <Button title="Dismiss" onPress={() => Navigation.dismissLightBox()} />
    </View>
  );
}
