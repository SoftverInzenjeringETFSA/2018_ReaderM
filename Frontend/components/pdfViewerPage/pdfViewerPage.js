import React, { Component } from 'react';
import { TouchableOpacity, WebView } from 'react-native';
import { View, Icon } from 'native-base';
import ActionButton from 'react-native-action-button';
import TopHeader from '../topHeader/topHeader.js';
//import Pdf from 'react-native-pdf';

import styles from './style.js';



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
  fetch('http://192.168.0.13:5000/savePDF', { //moja ip adresa
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
  chooseFile(){}
    // Za pristup za nazivu pdf-a koji se učitava, koristiti {this.props.location.state.detail}



  render(){
    return(
      <View style={{flex: 1}}>
        <TopHeader title={"Reader"} openDrawer={this.props.openDrawer }/>
        <View style={{flex:11, backgroundColor: '#f3f3f3'}}>
<<<<<<< HEAD
      {/*    <Pdf
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
          style={styles.pdf}/> */}
=======
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
>>>>>>> 12905e83b37bcab1e31c3da051c44663e1c70a92
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="Save to device" onPress={() => { this.saveToDevice() }}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Mark text" onPress={() => { this.chooseFile() }}>
              <Icon name="md-quote" style={styles.actionButtonIcon} />
            </ActionButton.Item>
              <ActionButton.Item buttonColor='#1abc9c' title="Save online"  onPress={() => { this.saveToWeb() }}>
              <Icon type="Entypo" name="save" style={styles.actionButtonIcon}/>
            </ActionButton.Item>
          </ActionButton>
        </View>
      </View>
    );
  }
}
