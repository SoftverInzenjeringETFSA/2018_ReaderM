import React, { Component } from "react"
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native"
import axios from "axios"


class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      loggedIn: "false"
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChangeEmail(text) {
    this.setState({
      email: text
    })
  }

  handleChangePassword(text) {
    this.setState({
      password: text
    })
  }

  onSubmit = async () => {
    /*var response = await fetch(
      `https://reader-si.herokuapp.com/login?email=${this.state.email}&lozinka=${this.state.password}`
      //`http://192.168.1.84:5000/Login?email=${this.state.email}&lozinka=${this.state.password}`
    )
    console.log(response.url)*/
    axios.get(`https://reader-si.herokuapp.com/login?email=${this.state.email}&lozinka=${this.state.password}`)
  .then(function (response) {
    console.log(response);
    this.setState({
      loggedIn: "true"
    })
  }.bind(this))
  .catch(function (error) {
    console.log(error);
  });
  }

  onLogout = () => {
    this.setState({
      loggedIn: "false"
    })
  }

  render() {
    if(this.state.loggedIn == "true") {
      return (
        <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.onLogout()}
        >
        <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
        </View>
      )
    }
    else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput
          name="email"
          value={this.state.email}
          onChangeText={this.handleChangeEmail}
          placeholder="email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          style={styles.input}
        />
        <TextInput
          name="password"
          value={this.state.password}
          onChangeText={this.handleChangePassword}
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          returnKeyType="go"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.onSubmit()}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20
  },
  input: {
    height:40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:15,
    color:'#FFF',
    paddingHorizontal:10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  }
 })

 export default LoginForm
 