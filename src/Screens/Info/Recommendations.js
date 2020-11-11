import React, { Component } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
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
        <ImageBackground source={require('../../../assets/Images/recommendations.png')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <View style={styles.submitButton}> 
       <TouchableOpacity style={[styles.submitButtonContainer, styles.continueButton]} onPress={this.continueNavigation}>
          <Text style={styles.continueText}>Submit</Text>
        </TouchableOpacity>
        </View>
     
        
        
        <View style={styles.userInputs}>
            <View style={styles.recommendations} >
            <TextInput  
                style={styles.recommendationsText}
                placeholder="type your suggestions here" 
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
  submitButton: {
    position: 'absolute',
    top: 818
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
  loginButton: {
    backgroundColor: "white",
    position: 'absolute',
    top: 750
  },
  submitButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
  },
  submitText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  
  
  recommendationsText: {
    position: 'absolute',
    top: -50,
    left: 20,
    height:145,
    fontWeight: 'bold',
    fontSize: 15,
  },
  userInputs: {
    position: "absolute",

  },
  recommendations: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 145,
    top: -190,
    borderRadius: 20,
    justifyContent:"center",
    padding:10 
  },
  continueButton: {
    backgroundColor: '#EFC102',
  },
  continueText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
});

                                            