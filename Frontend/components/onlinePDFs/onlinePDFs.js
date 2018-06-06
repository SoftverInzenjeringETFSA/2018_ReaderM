import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Icon, Footer, FooterTab, Button, Left, Right } from 'native-base';
import TopHeader from '../topHeader/topHeader.js';

class OnlinePregledScreen extends Component{
    constructor(props){
      super(props);
      this.state = { data: [{name : "Nesta"}]};
      this.changeData = this.changeData.bind(this);
      this.fetchData = this.fetchData.bind(this);
    }
    componentWillMount(){
        this.fetchData();
    }
    changeData(data) {
      this.setState({ data: data });
    }

    fetchData = () => {
      const ipadress = '192.168.1.84';
      var httpRequest = new XMLHttpRequest();
      var promjena = this.setState;
      httpRequest.open("GET", "http://192.168.1.84:5000/listPdf");
      httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var res = httpRequest.responseText;
          console.log(res);
          res = JSON.parse(res);
          if(res == null)
            return;
          console.log(res.data);
          promjena({data: res.data});
        }
      }
      httpRequest.send();
    };
    render() {
      return (
<<<<<<< HEAD
        <View style={{flex:1}}>
        <TopHeader title={"Reader"} openDrawer={this.props.openDrawer }/>
          <View style={styles.zaslon}>
            <FlatList style={styles.lista}
              data={(this.state.data == null)? []: this.state.data}
              keyExtractor = {(x, index) => index}
              renderItem = {({item}) => <TouchableOpacity onPress={() => { return ({
                                                                                                  pathname: '/PdfViewer',
                                                                                                  state: { detail: item.name }
                                                                                                })} }>
                                          <View style={styles.elementListe}>
                                            <Icon type="FontAwesome" name="file-pdf-o" />
                                            <Text style={{paddingLeft: 25, fontSize: 20}}>{item.name}</Text>
                                          </View>
                                        </TouchableOpacity>}
            />
          </View>

          <View style={{height: 58, flexDirection: 'row'}}>
            <Button style={{borderBottomWidth: 2, borderBottomColor: 'white', backgroundColor: '#3498DB', width: '50%', height: '100%'}}>
            <Text style={{color: 'white', fontSize: 18, paddingLeft: 30}}>Online documents</Text>
            </Button>
            <Button style={{backgroundColor: '#3498DB', width: '50%', height: '100%'}} onPress = {this.chooseFile}>
            <Text style={{color: 'white', fontSize: 18, paddingLeft: 30}}>Select from phone</Text>
            </Button>
          </View>

        </View>
=======
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
>>>>>>> parent of 542451d... Popravljen frontend
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
