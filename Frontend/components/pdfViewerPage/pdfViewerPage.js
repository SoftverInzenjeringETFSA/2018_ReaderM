import React, { Component } from 'react';
import { TouchableOpacity, WebView } from 'react-native';
import { View, Icon } from 'native-base';
import ActionButton from 'react-native-action-button';
import TopHeader from '../topHeader/topHeader.js';
import Pdf from 'react-native-pdf';

import styles from './style.js';


<<<<<<< HEAD
=======
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
>>>>>>> parent of 542451d... Popravljen frontend

export default class PdfViewerPage extends Component{

constructor(props){
  super(props)
  var uri = {
    html:"<html> <body><h1>To Open the <a href='http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf'>PDF</a></h1></body></html>"
  }
  this.state = { source: {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache:true} };
  //this.state = { source: {uri:'',cache:true}}

}
 saveToWeb(){
  console.log("Usao u funkciju spremi na web!");
  fetch('http://192.168.0.13:5000/savePDF', { //IP adresa racunara
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ime: 'Babo',
      opis: 'Babuka'
      //id: '123' S obzirom da druga grupa nije odradila id, onda ga ne unosimo u bazu
      }),
    });
  }
  saveToDevice() {
      console.log("Usao u funkciju spremi na uredjaj!");
      fetch('http://80.65.65.76:5000/savePdfToMobile?dir=./pdfs/WedMay162018225630GMT0200CentralEuropeanDaylightTime43.pdf', {
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/pdfs',
          }
      });
  }
  chooseFile(){
    options = {};
    Expo.DocumentPicker.getDocumentAsync(options).then((result) =>{
          console.log(result);
          this.setState({ source: { uri: result.uri }})
        }
   )
  }

  render(){
    return(
      <View style={{flex: 1}}>
<<<<<<< HEAD
        <TopHeader title={"Reader"} openDrawer={this.props.openDrawer }/>
        <View style={{flex:11, backgroundColor: '#f3f3f3'}}>

          <Pdf
            source={this.state.source}
            onLoadComplete={(numberOfPages,filePath)=>{
                console.log(`number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages)=>{
                console.log(`current page: ${page}`);
            }}
            onError={(error)=>{
                console.log(error);
            }}
          style={styles.pdf}/>

          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="Save to device" onPress={() => { this.saveToDevice() }}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Mark text" onPress={() => { this.chooseFile() }}>
              <Icon name="md-quote" style={styles.actionButtonIcon} />
            </ActionButton.Item>
              <ActionButton.Item buttonColor='#1abc9c' title="Save online"  onPress={() => { this.saveToWeb() }}>
              <Icon type="Entypo" name="save" style={styles.actionButtonIcon}/>
=======
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
>>>>>>> parent of 542451d... Popravljen frontend
            </ActionButton.Item>
          </ActionButton>
        </View>
      </View>
    );
  }
}
