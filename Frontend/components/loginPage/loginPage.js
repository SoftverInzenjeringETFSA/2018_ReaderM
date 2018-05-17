import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginForm'; 

export default class LoginPage extends Component{

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('../../images/reader.png')}
          />
        <Text style={styles.title}>An app made for pdf using React Native</Text>
        </View> 
        <View style={styles.formContainer}>
      <LoginForm/>
      </View>
      </KeyboardAvoidingView>
       
    ); 
  }
} 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
   },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width:100,
    height:100
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width:160,
    textAlign: 'center',
    opacity: 0.6
  }
   
 }); 