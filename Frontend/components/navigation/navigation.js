import React, { Component } from 'react';
import { Container, Content, Body, List, ListItem, Text, H1, Grid, Col } from 'native-base';

import styles from './navigationStyle.js';

export default class Navigation extends Component {
  render(){
    return(
      <Container>
        <Content style={{padding: 20}} >
          <Grid >
            <Col>
              <H1 style={{textAlign: 'center'}}>Johnny Guitar </H1>
              <List>
                <ListItem>
                  <Body>
                    <Text> PDF viewer </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Body>
                    <Text> Favourite quotes </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Body>
                    <Text> Settings </Text>
                  </Body>
                </ListItem>
                <ListItem>
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
