import React from 'react';
import { StyleSheet } from 'react-native';
import Divider from 'react-native-divider';


const CustomDivider = props => {
    return (
        <Divider style={styles.customDivider}
            borderColor='white'
            orientation='center'
        ></Divider>
    ); 
};

const styles = StyleSheet.create({
    customDivider: {
        
    }
});

export default CustomDivider;