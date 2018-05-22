import React, { Component } from 'react';
import { View  } from 'native-base';
import TopHeader from '../topHeader/topHeader.js';
import ActionButton from 'react-native-action-button';


export default class FavouriteQuotesPage extends Component{

  render(){
    return (
      <View style={{flex: 1}}>
        <TopHeader title="Quotes" openDrawer={this.props.openDrawer } />
        <View style={{flex:11, backgroundColor: '#f3f3f3'}}>
        </View>
      </View>
    );
  }
}
