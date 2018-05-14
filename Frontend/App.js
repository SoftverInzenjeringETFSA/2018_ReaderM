import React from 'react';
import RouterWrapper from './components/routerWrapper/routerWrapper.js';

export default class App extends React.Component {
  state = { fontsAreLoaded: false };
  render() {
    return (
        <RouterWrapper />
        );
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    }).then(() => this.setState({fontsAreLoaded: true }));
  }
}
