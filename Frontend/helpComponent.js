import React, {Component} from 'react'
//import {connect} from 'react-redux'
import {TouchableOpacity, StyleSheet, Linking} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem } from 'native-base';

export default class Help extends React.Component {

  render() {
    var DependenciesItems = [];
    var ComponentsItems = [];

    for(var i = 0; i < Dependencies.length; i++){
      DependenciesItems.push(
        <ListItem key={"Dependencies " + i}>
          <Body>
            <Text style={styles.NormalText}>Name: <Text style={styles.NestedText}> {Dependencies[i].name} </Text> </Text>
            <Text style={styles.NormalText}>Describtion: <Text style={styles.NestedText}> {Dependencies[i].describtion} </Text> </Text>
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
            <Text style={styles.NormalText}>Describtion: <Text style={styles.NestedText}> {Components[i].describtion} </Text> </Text>
          </Body>
        </ListItem>
      )
    }

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Text style={styles.HeaderText}> Developer Help</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <List >
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

function mapStateToProps(state){
  return {
    user: state.user
  }
}
const styles = StyleSheet.create({
  HeaderText: {
    color: '#fff'
  },
  NormalText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  NestedText: {
    color: "#333",
    fontWeight: 'normal'
  },
  Hyperlink: {
    color: "#44f",
    fontWeight: 'normal'

  }
})


const Components = [
  {name: "App Component", describtion: "Root of the application, hold all other components and handles loading of assets."},
  {name: "Help Component", describtion: "Responsible for displaying the developer help view and storing describtions about each component and dependencyq." }
];
const Dependencies = [
  {
    name: "React Native",
    describtion: "A javascript code library based on React that lets you build native Android and iOS applications.",
    doclink: "facebook.github.io/react-native/docs/getting-started.html"
  },
  {
    name: "Native Base",
    describtion: "Open source UI component library for React Native.",
    doclink: "docs.nativebase.io"
  }
];
