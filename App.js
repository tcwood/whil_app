import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import TestComp from './TestComp';

class AppInside extends React.Component {
  render() {
    console.log('hello!!!! world');
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TestComp />
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppInside />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
