/*
  Autor: Muhamed Delaić
  Ime: helpPage.js
  Uloga: Pogled namjenjen da pomogne developerima, sadrži listu svih controllera, modela i pogleda kao i dependency-a
*/

import React, { Component } from 'react'
import { Container, Header, Content, Button, Left, Right, Body, Icon, Text, List, ListItem } from 'native-base';

import styles from './style.js';


export default class Help extends Component {

  render() {
    var DependenciesItems = [];
    var ComponentsItems = [];

    for(var i = 0; i < Dependencies.length; i++){
      DependenciesItems.push(
        <ListItem key={"Dependencies " + i}>
          <Body>
            <Text style={styles.NormalText}>Name: <Text style={styles.NestedText}> {Dependencies[i].name} </Text> </Text>
            <Text style={styles.NormalText}>Description: <Text style={styles.NestedText}> {Dependencies[i].description} </Text> </Text>
            <Text style={styles.NormalText}>Link to docs:
              <Text style={styles.Hyperlink}> {Dependencies[i].doclink} </Text>
            </Text>
          </Body>
        </ListItem>
      )
    }
    for(var i = 0; i < Components.length; i++){
      ComponentsItems.push(
        <ListItem key={"Components " + i}>
          <Body>
            <Text style={styles.NormalText}>Name: <Text style={styles.NestedText}> {Components[i].name} </Text> </Text>
            <Text style={styles.NormalText}>Description: <Text style={styles.NestedText}> {Components[i].description} </Text> </Text>
          </Body>
        </ListItem>
      )
    }

    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Text style={styles.HeaderText}> Developer Help</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <List pointerEvents='box-only'>
            <ListItem itemHeader>
              <Text>Components </Text>
            </ListItem>
            {ComponentsItems}
            <ListItem itemHeader>
              <Text>Models </Text>
            </ListItem>
            <ListItem itemHeader>
              <Text>Dependencies</Text>
            </ListItem>
            {DependenciesItems}
          </List>
        </Content>
      </Container>
    )
  }
}


const Components = [
  {name: "App Component", description: "Root of the application, hold all other components and handles loading of assets."},
  {name: "RouterWrapper Component", description: "Handles all logic for routing and navigation"},
  {name: "Navigation Component", description: "Sidebar view with all the logic."},
  {name: "HelpPage Component", description: "Responsible for displaying the developer help view and storing describtions about each component and dependency." }
];
const Dependencies = [
  {
    name: "React Native",
    description: "A javascript code library based on React that lets you build native Android and iOS applications.",
    doclink: "facebook.github.io/react-native/docs/getting-started.html"
  },
  {
    name: "Native Base",
    description: "Open source UI component library for React Native.",
    doclink: "docs.nativebase.io"
  },
  {
    name: "React Router Native",
    description: "React Router is a collection of navigational components that compose declaratively with your application.",
    doclink: "reacttraining.com/react-router/native/"
  }

];
