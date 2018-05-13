import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Help  from './components/help/help.js'
import Navigation from './components/navigation/navigation.js';

export default class App extends React.Component {
  state = { fontsAreLoaded: false };
  render() {
  return (
        <Help />
      );
  }
async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  }).then(() => this.setState({fontsAreLoaded: true }));
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
