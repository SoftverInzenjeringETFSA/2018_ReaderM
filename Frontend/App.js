import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import Help  from './components/help/help.js'
import Navigation from './components/navigation/navigation.js';
import PDFviewer from './components/pdfViewer/pdfViewer.js';



=======
import RouterWrapper from './components/routerWrapper/routerWrapper.js';
>>>>>>> origin/master

export default class App extends React.Component {
  state = { fontsAreLoaded: false };
  render() {
<<<<<<< HEAD
  return (
        <PDFviewer />
      );
=======
    return (
        <RouterWrapper />
        );
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    }).then(() => this.setState({fontsAreLoaded: true }));
>>>>>>> origin/master
  }
}
