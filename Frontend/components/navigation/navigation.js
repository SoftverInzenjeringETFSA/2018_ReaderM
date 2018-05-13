import React, { Component } from 'react';
import { Container, Content, Body, List, ListItem, Text, H1, Grid, Col, Icon, Left } from 'native-base';

import styles from './navigationStyle.js';

export default class Navigation extends Component {

  render(){
    return(
      <Container>
        <Content style={{padding: 20, backgroundColor:'#fff'}} >
          <Grid >
            <Col>
              <H1 style={styles.navigationHeader}>Johnny Guitar </H1>
              <List>
                <ListItem icon button={true} onPress={() => {}}>
                  <Left>
                    <Icon type="FontAwesome" name="file-pdf-o"/>
                  </Left>
                  <Body>
                    <Text> PDF viewer </Text>
                  </Body>
                </ListItem>
                <ListItem icon button={true} onPress={() => {}}>
                  <Left>
                    <Icon name="quote" />
                  </Left>
                  <Body>
                    <Text> Favourite quotes </Text>
                  </Body>
                </ListItem>
                <ListItem icon button={true} onPress={() => {}}>
                  <Left>
                    <Icon type="MaterialCommunityIcons" name="developer-board"/>
                  </Left>
                  <Body>
                    <Text> Help </Text>
                  </Body>
                </ListItem>
                <ListItem icon button={true} onPress={() => {}}>
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
