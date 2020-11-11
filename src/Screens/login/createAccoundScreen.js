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
        <ImageBackground source={require('../../../assets/Images/createAccountScreen.png')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <TouchableOpacity style={[styles.createButtonContainer, styles.createAccountButton]} onPress={this.createAccountNavigation}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
        
        <TouchableHighlight style={[styles.loginButtonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Terms and Conditions</Text>
        </TouchableHighlight>
        <View style={styles.userInputs}>
            <View style={styles.firstNameInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="first name" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.lastNameInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="last name" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.emailInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="email" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.usernameInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="username" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.passwordInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="password" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.zipCodeInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="zip code" 
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
  createAccountButton: {
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
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:210,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "white",
    position: 'absolute',
    top: 750
  },
  createButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:245,
    borderRadius:30,
  },
  createAccountButton: {
    backgroundColor: '#EFC102',
    position: 'absolute',
    top: 818
  },
  loginText: {
    fontSize: 15,
    color: '#5D41BC',
    
  },
  createAccountText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  firstNameInput:{
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -170,
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
  lastNameInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -120,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  emailInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -35,
    borderRadius: 30,
    justifyContent:"center",
    padding:10 
  },
  usernameInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: 50,
    borderRadius: 30,
    justifyContent:"center",
    padding:10 
  },
  passwordInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: 100,
    borderRadius: 30,
    justifyContent:"center",
    padding:10 
  },
  zipCodeInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: 185,
    borderRadius: 30,
    justifyContent:"center",
    padding:10 
  }
});

                                            