import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native';
import Colors from '../../Themes/Colors';


const createAccountLoginButton = props => {
    return (
        <View style={styles.addToContainer}>
            <View >
                <TouchableOpacity style={styles.addToButton} onPress={props.addToWishlist}>
                     <Text style={styles.addToText}> Create Account </Text>
                </TouchableOpacity>
                    
            </View>
            <View>
                <TouchableOpacity style={styles.sellSomethingButton} onPress={props.addToGrantlist}>
                    <Text style={styles.sellSomethingText}> Log In </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    addToContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    addToButton: {
        width: 115,
        height: 34,
        backgroundColor: Colors.wishlistColor,
        borderRadius: 8
    },
    addToText: {
        textAlign: 'center',
        paddingTop: 5,
        color: 'white'
    },
    sellSomethingButton: {
        width: 168,
        height: 34,
        backgroundColor: Colors.wishlistColor,
        borderRadius: 8,
        position: 'absolute',
        left: 108
    },
    sellSomethingText: {
        textAlign: 'center',
        paddingTop: 5,
        color: 'white'
    },



});

export default createAccountLoginButton;