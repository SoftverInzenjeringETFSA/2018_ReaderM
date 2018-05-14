import React, { Component } from 'react';
import { View, Text, Container, Header, Body, Left, Icon, Title, Right, Content } from 'native-base';
import ActionButton from 'react-native-action-button';

import styles from './style.js';

export default class PdfViewerPage extends Component{
  //provjeriti da li treba this kod deklaracije i poyiva funkcije
  /*
        Dokument ima atribute: ime, opis, direktoriji, datum_upload-a, datum_posljednjeg_citanja, korisni_id
*/
  naziv () {
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
      <Container>
        <Header>
          <Left>
            <Icon type="Entypo" name="menu" style={{ color:'#fff' }} />
          </Left>
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
