import React, { Component } from 'react';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';
import { Drawer, Button,View } from 'native-base';
import { Text } from 'react-native';
import Navigation from '../navigation/navigation.js';
import Help from '../help/help.js';


export default class RouterWrapper extends Component {

  render(){
      this.closeDrawer = () => {
        this.drawer._root.close()
      };
      this.openDrawer = () => {
        this.drawer._root.open()
      };
      return (
        <Router>
          <Drawer
            type="overlay"
            acceptPan={true}
            ref={(ref) => { this.drawer = ref; }}
            content={<Navigation />}
            panOpenMask={.25}
            >
            <Switch>
              <Route to="/" component={Help}/>
            </Switch>
          </Drawer>
        </Router>
      );
  }
};
