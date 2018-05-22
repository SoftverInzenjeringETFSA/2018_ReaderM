import React, { Component } from 'react';

import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'native-base';

import styles from './style.js';

export default class TopHeader extends Component{

  render(){
    return(
      <View style={styles.header}>
        <TouchableOpacity onPress={() => this.props.openDrawer()}>
          <Icon type="Entypo" name="menu" style={{ color:'#fff', paddingLeft: 10, paddingTop: 14 }} />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 22, paddingRight: 210, paddingTop: 14}}> {this.props.title} </Text>
        <Icon type="Feather" name="search" style={{ color:'#fff', paddingRight: 16, paddingTop: 14 }}/>
      </View>
    );
  }
};
