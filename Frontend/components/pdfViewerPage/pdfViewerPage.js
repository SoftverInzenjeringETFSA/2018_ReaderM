import React, {Component} from 'react';
import {Button, Alert, TouchableOpacity } from 'react-native';
import {View, Text, Icon, Title} from 'native-base';
import ActionButton from 'react-native-action-button';
import styles from './style.js';

export default class PdfViewerPage extends Component{
 spremi_na_web = function(){

console.log("Usao u funkciju spremi na web!");
fetch('http://192.168.0.13:5000/savePDF', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    ime: 'yourValue',
    opis: 'yourOtherValue',
    id: '145'
    })
  });
}

    saveToDevice = function () {
        console.log("Usao u funkciju spremi na uredjaj!");
        fetch('http://80.65.65.76:5000/savePdfToMobile?dir=./pdfs/WedMay162018225630GMT0200CentralEuropeanDaylightTime43.pdf', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/pdfs',
            }
        });
    }

    // Za pristup za nazivu pdf-a koji se učitava, koristiti {this.props.location.state.detail}

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.history.replace('/')}>
            <Icon type="Entypo" name="menu" style={{ color:'#fff', paddingLeft: 10, paddingTop: 14 }} />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 22, paddingRight: 210, paddingTop: 14}}>Reader</Text>
          <Icon type="Feather" name="search" style={{ color:'#fff', paddingRight: 16, paddingTop: 14 }}/>
        </View>
        <View style={{flex:11, backgroundColor: '#f3f3f3'}}>
          <ActionButton buttonColor="#3498DB">
            <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Mark text" onPress={() => {}}>
              <Icon name="md-quote" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#9b59b6' title="Save online" onPress={this.spremi_na_web}>
              <Icon type="Entypo" name="save" style={styles.actionButtonIcon} />
            </ActionButton.Item>
              <ActionButton.Item buttonColor='#1abc9c' title="Save to device" onPress={() => {}}>
              <Icon type="Entypo" name="download" style={styles.actionButtonIcon}/>
            </ActionButton.Item>
          </ActionButton>
        </View>
      </View>
    );
  }
}
