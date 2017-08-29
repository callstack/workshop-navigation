import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { screens } from '../constants';

const routes = [
  {
    id: screens.home,
    title: 'Home',
  },
  {
    id: screens.about,
    title: 'About',
  },
];

export default class Drawer extends Component {
  handleItemPress = (routeId, routeTitle) => {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true,
    });
    this.props.navigator.handleDeepLink({
      link: routeId,
      payload: routeTitle,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {routes.map(route =>
          <TouchableOpacity
            key={route.id}
            style={styles.drawerItem}
            onPress={() => this.handleItemPress(route.id, route.title)}
          >
            <Text style={styles.title}>
              {route.title}
            </Text>
          </TouchableOpacity>,
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  drawerItem: {
    height: 50,
  },
  title: {
    fontSize: 14,
    color: 'blue',
  },
});
