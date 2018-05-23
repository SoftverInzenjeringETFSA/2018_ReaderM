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

    chooseFile(){
    options = {};
    Expo.DocumentPicker.getDocumentAsync(options).then((result) =>{
          console.log(result);
          this.setState({ source: { uri: result.uri }})
        }
    )
  }

    render() {
      return (
        <View style={{flex:1}}>

          <View style={{flex: 1, marginTop: 24, backgroundColor: '#3498DB', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => this.props.history.replace('/')}>
              <Icon type="Entypo" name="menu" style={{ color:'#fff', paddingLeft: 10, paddingTop: 14 }} />
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 22, paddingRight: 210, paddingTop: 14}}>Reader</Text>
            <Icon type="Feather" name="search" style={{ color:'#fff', paddingRight: 16, paddingTop: 14 }}/>
          </View>

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

          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button style={{borderBottomWidth: 2, borderBottomColor: 'white', backgroundColor: '#3498DB', width: '50%', height: '100%'}}>
            <Text style={{color: 'white', fontSize: 18, paddingLeft: 30}}>Online documents</Text>
            </Button>
            <Button style={{backgroundColor: '#3498DB', width: '50%', height: '100%'}} onPress = {this.chooseFile}>
            <Text style={{color: 'white', fontSize: 18, paddingLeft: 30}}>Select from phone</Text>
            </Button>
          </View>

        </View>
      );
    }
}

export default OnlinePregledScreen;


const styles = StyleSheet.create({
  zaslon: {
    flex: 10,
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
  }
});
