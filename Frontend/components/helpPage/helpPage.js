import React, { Component } from "react"
import { 
  Text, 
  ScrollView
} from "react-native"
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  List,
  ListItem,
  Title,
  View,
  H1
} from "native-base"

import TopHeader from "../topHeader/topHeader.js"
import styles from "./style.js"
import data from "../../data/help/data.json"


class Help extends Component {
  render() {
    const components = data.components
    const dependencies = data.dependencies
    const dependenciesJSX = []
    const componentsJSX = []

    components.forEach((component, index) => {
      componentsJSX.push(
        <ListItem key={index}>
          <View>
            <Text style={styles.NormalText}>
              Name:&nbsp;  
              <Text style={styles.NestedText}>{component.name}</Text> 
            </Text>
            <Text style={styles.NormalText}>
              Description:&nbsp;  
              <Text style={styles.NestedText}>{component.description}</Text> 
            </Text>
          </View>
        </ListItem>
      )
    })

    dependencies.forEach((dependency, index) => {
      dependenciesJSX.push(
        <ListItem key={index}>
          <View>
            <Text style={styles.NormalText}>
              Name:&nbsp;
              <Text style={styles.NestedText}>{dependency.name}</Text>
            </Text>
            <Text style={styles.NormalText}>
              Description:&nbsp;
              <Text style={styles.NestedText}>{dependency.description}</Text> 
            </Text>
            <Text style={styles.NormalText}>
              Link to docs:&nbsp;
              <Text style={styles.Hyperlink}>{dependency.doclink}</Text>
            </Text>
          </View>
        </ListItem>
      )
    })

    return (
      <View style={{ flex: 1 }}>
        <TopHeader title="Dev Help" openDrawer={openDrawer} />
        <ScrollView>
          <View>
            <H1>Components</H1>
            {componentsJSX}
          </View>
          <View>
            <H1>Dependencies</H1>
            {dependenciesJSX}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Help