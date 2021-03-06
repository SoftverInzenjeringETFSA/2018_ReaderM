import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import { Drawer, Button, View, Text } from 'native-base';

// Lista svih pogleda
import LoginPage from '../loginPage/loginPage.js';
import FavouriteQuotesPage from '../favouriteQuotesPage/favouriteQuotesPage.js';
import Navigation from '../navigation/navigation.js';
import Help from '../helpPage/helpPage.js';
import OnlinePDFs from '../onlinePDFs/onlinePDFs.js';
import StateManager from '../../models/StateManager.js';

// history je objekat koji dolazi uz react-router-native
// on posjeduje metode kao sto su goBack(), push() koji
// nam omogućuju navigaciju
const history = createHistory();

export default class RouterWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      StateManager
     }
  }

  render(){
      closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
      };
      return (
        <Router history={history}>
          <Drawer
            type="overlay"
            acceptPan={true}
            ref={(ref) => { this.drawer = ref; }}
            content={<Navigation history={history} closeDrawer={ closeDrawer } />}>
            <Switch>
              <Route exact path="/" component={() => <LoginPage openDrawer={ openDrawer } /> } />
              <Route exact path="/OnlinePDFs" component={() => <OnlinePDFs openDrawer={ openDrawer } /> } />
              <Route exact path="/FavouriteQuotes" component={() => <FavouriteQuotesPage openDrawer={ openDrawer } /> } />
              <Route exact path="/Help" component={() => <Help openDrawer={ openDrawer } /> } />
            </Switch>
          </Drawer>
        </Router>
      );
  }
};
