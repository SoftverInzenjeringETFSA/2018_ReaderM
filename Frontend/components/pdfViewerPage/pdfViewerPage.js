import React, { Component } from 'react';
import { View, Text, Container, Header, Body, Left, Icon, Title, Right, Content } from 'native-base';

export default class PdfViewerPage extends Component{

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
        </Content>
      </Container>
    );
  }
}
