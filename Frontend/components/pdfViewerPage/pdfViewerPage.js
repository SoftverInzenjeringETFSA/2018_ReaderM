import React, { Component } from 'react';
import { Button, Alert } from 'react-native';
import { View, Text, Container, Header, Body, Left, Icon, Title, Right, Content } from 'native-base';
import RNFetchBlob from 'react-native-fetch-blob';

export default class PdfViewerPage extends Component{

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
        </Content>
      </Container>
    );
  }
}
