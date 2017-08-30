import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

export default function TabContent() {
  const data = Array.from({ length: 50 }).map((item, key) => `item-${key}`);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Text style={styles.item}>
            {item}
          </Text>}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    padding: 16,
  },
});
