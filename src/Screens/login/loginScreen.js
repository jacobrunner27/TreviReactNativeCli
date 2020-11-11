import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';



import { createStackNavigator, createAppContainer } from "react-navigation";





export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  render() {
    return (
      
      <View style={styles.container}>
        

        <View>
        <ImageBackground source={require('../../../assets/Images/loginScreen1.png')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <TouchableOpacity style={[styles.loginButtonContainer, styles.loginButton]} onPress={this.createAccountNavigation}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        
        
        <View style={styles.userInputs}>
            <View style={styles.emailInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="email" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
        </View>

        <View style={styles.userInputs}>
            <View style={styles.passwordInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="password" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
        </View>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  treviText: {

  },
  loginButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:120,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#EFC102',
    position: 'absolute',
    top: 818
  },
  loginText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  emailInput:{
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -258,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  passwordInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -140,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  inputText:{
    height:50,
    fontWeight: 'bold',
    fontSize: 15,
  },
  userInputs: {
    position: "absolute",

  },
  
});

                                            