/*
  Autor: Muhamed Delalić
  Ime: navigation.js
  Uloga: Sav izgled i logika za navigaciju koja se pristupa 'swipe left'-om na ekranu
*/
import React, { Component } from 'react';
import { Container, Content, Body, List, ListItem, Text, H1, Grid, Col, Icon, Left } from 'native-base';

import styles from './style.js';

export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.moveToPage.bind(this);
  }
// TODO: dodati provjeru da se ne moze sa pogleda otici na isti pogled
// tj. ukoliko je korisnik na HelpPage treba zabranici da ode na HelpPage
  moveToPage(pageName){
    this.props.history.replace(pageName);
    this.props.closeDrawer();
  }
// TODO: srediti izgled, staviti ljepse ikone
  render(){
    return(
      <Container>
        <Content style={{padding: 20, backgroundColor:'#fff'}} >
          <Grid >
            <Col>
              <H1 style={styles.navigationHeader}>Johnny Guitar </H1>
              <List>
                <ListItem icon button={true} onPress={() => { this.moveToPage('PdfViewer');}}>
                  <Left>
                    <Icon type="FontAwesome" name="file-pdf-o"/>
                  </Left>
                  <Body>
                    <Text> PDF viewer </Text>
                  </Body>
                </ListItem>
                <ListItem icon button={true} onPress={() => { this.moveToPage('/FavouriteQuotes')}}>
                  <Left>
                    <Icon name="quote" />
                  </Left>
                  <Body>
                    <Text> Favourite quotes </Text>
                  </Body>
                </ListItem>
                <ListItem icon button={true} onPress={() => { this.moveToPage('/Help')}}>
                  <Left>
                    <Icon type="MaterialCommunityIcons" name="developer-board"/>
                  </Left>
                  <Body>
                    <Text> Help </Text>
                  </Body>
                </ListItem>
                <ListItem icon button={true} onPress={() => {this.moveToPage('/')}}>
                  <Left>
                    <Icon type="Feather" name="log-out"/>
                  </Left>
                  <Body>
                    <Text> Log Out </Text>
                  </Body>
                </ListItem>
              </List>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
};
