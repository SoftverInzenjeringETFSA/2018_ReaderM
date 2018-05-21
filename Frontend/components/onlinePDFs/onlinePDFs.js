import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Icon, Footer, FooterTab, Button, Left, Right } from 'native-base';

class OnlinePregledScreen extends Component{
    state = {
      data: [{name: 'The Cathedral'}, {name: 'Ježeva kućica'}, {name: 'Unity Guide'}, {name: 'Osnove digitalnih računara'}]
    };

    componentWillMount(){
        this.fetchData();
    }

    fetchData = async () => {
      const response = await fetch('http://localhost:3000/PregledDokumenata');
      const json = await response.json();
      this.setState({ data: json.ime });
    };

    render() {
      return (
        <Container>
          <Header style={styles.header}>
            <Left style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => this.props.history.replace('/')}>
                <Icon type="Entypo" name="menu" style={{ color:'#fff' }} />
              </TouchableOpacity>
              <Text style={{color: 'white', fontSize: 22, paddingLeft: 30}}>Reader</Text>
            </Left>
            <Right>
              <Icon type="Feather" name="search" style={{ color:'#fff', paddingRight: 10 }}/>
            </Right>
          </Header>
          <Content>
            <View style={styles.zaslon}>
              <FlatList style={styles.lista}
                data = {this.state.data}
                keyExtractor = {(x, index) => index}
                renderItem = {({item}) => <TouchableOpacity onPress={() => this.props.history.push({
                                                                                                    pathname: '/PdfViewer',
                                                                                                    state: { detail: item.name }
                                                                                                  })}>
                                            <View style={styles.elementListe}>
                                              <Icon type="FontAwesome" name="file-pdf-o" />
                                              <Text style={{paddingLeft: 25, fontSize: 20}}>{item.name}</Text>
                                            </View>
                                          </TouchableOpacity>}
              />
            </View>
          </Content>
          <Footer>
            <FooterTab style={styles.footer}>
              <Button style={{borderBottomWidth: 2, borderBottomColor: 'white'}}>
              <Text style={{color: 'white', fontSize: 18}}>Online documents</Text>
              </Button>
              <Button>
              <Text style={{color: 'white', fontSize: 18}}>Select from phone</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
}

export default OnlinePregledScreen;


const styles = StyleSheet.create({
  zaslon: {
    flex: 1,
    backgroundColor: 'white',
  },
  lista: {
    flex: 2,
    borderColor: '#BDBDBD',
  },
  elementListe: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    flexDirection: 'row',
    padding: 19,
    paddingLeft: 25,
  },
  header: {
    marginTop: 24,
    backgroundColor: '#3498DB',
  },
  footer: {
    backgroundColor: '#3498DB'
  }
});
