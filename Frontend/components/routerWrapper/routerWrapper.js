/*
  Autor: Muhamed Delalić
  Ime: routerWrapper.js
  Uloga: Ova komponenta se bavi sa navigacijom i promijenom trenutnih pogleda

  TODO: Implamentirati autorizaciju za sve componente sem LoginPage-a
*/
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import { Drawer, Button, View, Text } from 'native-base';

// Lista svih pogleda
import LoginPage from '../loginPage/loginPage.js';
import PdfViewerPage from '../pdfViewerPage/pdfViewerPage.js';
import FavouriteQuotesPage from '../favouriteQuotesPage/favouriteQuotesPage.js';
import Navigation from '../navigation/navigation.js';
import Help from '../helpPage/helpPage.js';


// history je objekat koji dolazi uz react-router-native
// on posjeduje metode kao sto su goBack(), push() koji
// nam omogućuju navigaciju
const history = createHistory();

export default class RouterWrapper extends Component {
  constructor(props){
    super(props);
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
            content={<Navigation history={history} closeDrawer={ closeDrawer } />}
            panOpenMask={.9} >

            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/PdfViewer" component={PdfViewerPage} />
              <Route exact path="/FavouriteQuotes" component={FavouriteQuotesPage} />
              <Route exact path="/Help" component={Help} />
            </Switch>
          </Drawer>
        </Router>
      );
  }
};
