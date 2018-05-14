import React, { Component } from 'react';
import { Container, Header, Content, Badge, Text, View, Icon } from 'native-base';
import ActionButton from 'react-native-action-button';

import styles from './pdfViewerStyle.js';

export default class PDFviewer extends Component {
//provjeriti da li treba this kod deklaracije i poyiva funkcije
/*
      Dokument ima atribute: ime, opis, direktoriji, datum_upload-a, datum_posljednjeg_citanja, korisni_id
*/
this.naziv () {
  fetch('http://localhost:5000/savePDF', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
},
body: JSON.stringify({
  ime: 'yourValue',
  sadrzaj: 'yourOtherValue',
}),
});

}
  render(){
    return(
      /* Dodana okrugla ikonica sa opcijama za dodavanje quote-a i za spremanje PDF dokumenta na web
      */
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
       {/* Rest of the app comes ABOVE the action button component !*/}
       <ActionButton buttonColor="rgba(231,76,60,1)">
         <ActionButton.Item buttonColor='#3498db' title="Mark text" onPress={() => {}}>
           <Icon name="md-quote" style={styles.actionButtonIcon} />
         </ActionButton.Item>
         <ActionButton.Item buttonColor='#1abc9c' title="Save online"  onPress={this.naziv()}>
           <Icon type="Entypo" name="save" style={styles.actionButtonIcon} />
         </ActionButton.Item>
       </ActionButton>
     </View>
    );
  }
};
