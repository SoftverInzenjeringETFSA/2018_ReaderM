import React, { Component } from 'react';
import { Button, Alert } from 'react-native';
import { View, Text, Container, Header, Body, Left, Icon, Title, Right, Content } from 'native-base';
//import RNFetchBlob from 'react-native-fetch-blob';
import ActionButton from 'react-native-action-button';

export default class PdfViewerPage extends Component{
  /*
        Provjeriti da li treba 'this' kod deklaracije i poziva funkcije
        Dokument u bazi ima atribute: ime, opis, direktoriji, datum_upload-a, datum_posljednjeg_citanja, korisni_id
        Obzirom da se vecina ovih atributa automatski generira u bazu, potrebno je proslijediti samo naziv dokumenta, sadrzaj i id korisnika
        Funkciju 'spremi_na_web' pozivam kod button-a 'save online'
*/
  spremi_na_web () {
  return  fetch('http://localhost:5000/savePDF',
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
  }).then(function(response)
    {
        return response.json();
    }).catch(function(error){
        console.log("Greska u funkciji spremi na web! U pitanju je greška: ");
        throw error;
    });

}
  render(){
    return(

      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
       {/* Rest of the app comes ABOVE the action button component !*/}
       <ActionButton buttonColor="rgba(231,76,60,1)">
         <ActionButton.Item buttonColor='#9b59b6' title="Mark text" onPress={() => console.log("notes tapped!")}>
           <Icon name="md-quote" style={styles.actionButtonIcon} />
         </ActionButton.Item>
         <ActionButton.Item buttonColor='#3498db' title="Save online" onPress={() => {}}>
           <Icon type="Entypo" name="save" style={styles.actionButtonIcon} />
         </ActionButton.Item>
       </ActionButton>
     </View>
    );
  }
}
