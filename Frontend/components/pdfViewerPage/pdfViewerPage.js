import React, {Component} from 'react';
import {Button, Alert} from 'react-native';
import {View, Text, Container, Header, Body, Left, Icon, Title, Right, Content} from 'native-base';
import ActionButton from 'react-native-action-button';


export default class PdfViewerPage extends Component{
  /*
        Provjeriti da li treba 'this' kod deklaracije i poziva funkcije
        Dokument u bazi ima atribute: ime, opis, direktoriji, datum_upload-a, datum_posljednjeg_citanja, korisni_id
        Obzirom da se vecina ovih atributa automatski generira u bazu, potrebno je proslijediti samo naziv dokumenta, sadrzaj i id korisnika
        Funkciju 'spremi_na_web' pozivam kod button-a 'save online'
*/
 spremi_na_web = function(){

console.log("Usao u funkciju spremi na web!");
fetch('http:localhost:27017', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
    }),
  });
}

  render(){
    //const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
    return(
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item buttonColor='#9b59b6' title="Save to device" onPress={() => console.log("notes tapped!")}>
           <Icon name="md-create" style={styles.actionButtonIcon} />
         </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title="Mark text" onPress={() => {}}>
          <Icon name="md-quote" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="Save online"  onPress={this.spremi_na_web}>
          <Icon type="Entypo" name="save" style={styles.actionButtonIcon}/>
        </ActionButton.Item>
      </ActionButton>
    </View>
    );
  }

}
