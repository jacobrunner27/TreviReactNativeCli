import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Colors from '../../Themes/Colors'

const HomeScreenButtons = props => {
    return (
        <View style={styles.priceContainer}>
            <View >
                <TouchableOpacity style={styles.priceButton} onPress={props.onFilterPrice}>
                     <Text style={styles.priceText}> Price </Text>
                </TouchableOpacity>
                    
            </View>
            <View>
                <TouchableOpacity style={styles.categoryButton} onPress={props.onFilterCategory}>
                    <Text style={styles.categoryText}> Category </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    priceContainer: {
        flexDirection: 'row',
        paddingTop: 40,
        paddingRight: 20
    },

    priceButton: {
        margin: 5,
        borderRadius: 27,
        width: 57,
        height: 25,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5
    },
    priceText: {
        textAlign: 'center',
        fontSize: 15,
        color: Colors.wishlistColor,
        fontWeight: 'bold'
    },
    categoryButton: {
        margin: 5,
        borderRadius: 27,
        width: 79,
        height: 25,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5
    },
    categoryText: {
        textAlign: 'center',
        fontSize: 15,
        color: Colors.wishlistColor,
        fontWeight: 'bold'
    }
    
});

export default HomeScreenButtons;

