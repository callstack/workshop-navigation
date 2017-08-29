import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { screens } from '../constants';

export default class Login extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    username: '',
    password: '',
  };

  handleTextInputChange = key => value => {
    this.setState({
      [key]: value,
    });
  };

  handleLogin = () => {
    this.props.navigator.resetTo({
      screen: screens.home,
      title: 'Home',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="username"
          onChangeText={this.handleTextInputChange('username')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={this.handleTextInputChange('password')}
          secureTextEntry
        />
        <Button
          title="Login"
          onPress={this.handleLogin}
          disabled={!this.state.username || !this.state.password}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    height: 200,
  },
  textInput: {
    paddingHorizontal: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});
