import React, { Component } from 'react';
import { Button, Alert } from 'react-native';
import { View, Text, Container, Header, Body, Left, Icon, Title, Right, Content } from 'native-base';
<<<<<<< HEAD
import RNFetchBlob from 'react-native-fetch-blob';
=======
import ActionButton from 'react-native-action-button';

import styles from './style.js';
>>>>>>> ef6986163b601c5760161234f7029f3b149d7ce3

export default class PdfViewerPage extends Component{
  /*
        Provjeriti da li treba 'this' kod deklaracije i poziva funkcije
        Dokument u bazi ima atribute: ime, opis, direktoriji, datum_upload-a, datum_posljednjeg_citanja, korisni_id
        Obzirom da se vecina ovih atributa automatski generira u bazu, potrebno je proslijediti samo naziv dokumenta, sadrzaj i id korisnika
        Funkciju 'spremi_na_web' pozivam kod button-a 'save online' 
*/
  spremi_na_web () {
    fetch('http://localhost:5000/savePDF',
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
      body: JSON.stringify({
          ime: 'yourValue',
          opis: 'yourOtherValue',
          id: 'neki broj'
          })
  });

  }
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Icon type="Entypo" name="menu" style={{ color:'#fff' }} />
          </Left>
          <View>
          <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => {
              Alert.alert('test!');
              // Kod za download pdf file-a
              // send http request in a new thread (using native code)
            RNFetchBlob.fetch('GET', 'https://ufile.io/k6r5m', {
              Authorization : 'Bearer access-token...',
              // more headers  ..
            })
            // when response status code is 200
            .then((res) => {
              // the conversion is done in native code$ npm install --save react-native-fetch-blog@0.6.3-dev.1
              let base64Str = res.base64()
              // the following conversions are done in js, it's SYNC
              let text = res.text()
              let json = res.json()

            })
            // Status code is not 200
            .catch((errorMessage, statusCode) => {
              // error handling
            })
            }                       
            }
            title="Save">Save
            </Button>
          </View>
          <Body>
            <Title style={{ color:'#fff' }}> Reader </Title>                           
          </Body>
          <Right />
        </Header>
        <Content>
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
        </Content>
      </Container>
    );
  }
}
