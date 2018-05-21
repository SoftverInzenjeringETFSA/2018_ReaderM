import React, { Component } from 'react';
import { View, Text, Container, Header, Body, Left, Icon, Title, Right, Content } from 'native-base';
import ActionButton from 'react-native-action-button';


export default class FavouriteQuotesPage extends Component{


  render(){
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#3498db' title="Mark text" onPress={() => {}}>
              <Icon name="md-quote" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="Save online"  onPress={() => {}}>
              <Icon type="Entypo" name="save" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
      </View>
    );
  }
}
