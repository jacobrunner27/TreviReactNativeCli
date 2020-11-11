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
        <ImageBackground source={require('../../../assets/Images/editLocation.png')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <View style={styles.submitButton}> 
       <TouchableOpacity style={[styles.submitButtonContainer, styles.continueButton]} onPress={this.continueNavigation}>
          <Text style={styles.continueText}>Save</Text>
        </TouchableOpacity>
        </View>
     
        
        
        <View style={styles.userInputs}>
            <View style={styles.zipcode} >
            <TextInput  
                style={styles.recommendationsText}
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
  submitButton: {
    position: 'absolute',
    top: 818
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
    alignContent: 'center',
    paddingBottom: 6
  },
  userInputs: {
    position: "absolute",

  },
  zipcode: {
    width: 100,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 37,
    top: -270,
    borderRadius: 20,
    justifyContent:"center",
     
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

                                            