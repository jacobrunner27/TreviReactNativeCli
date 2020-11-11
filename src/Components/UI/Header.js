import React from 'react';
import { StyleSheet, Text, View, totalSize } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Header() {
    return (
        <View style={styles.headerMainContainer}> 
            <View>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate(routes.profile)} style={styles.profileIcon}>
                    <Image source={require('../../../assets/profile/1.jpg')} style={{ width: totalSize(4), height: totalSize(4), borderRadius: 50, borderWidth: 2, borderColor: Colors.white }} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.treviIcon}>
                    <Image source={require('../../../assets/Images/treviLogo.png')} style={{ width: totalSize(4), height: totalSize(4), }} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.wishlistIcon} onPress={() => this.props.navigation.navigate('myWishlist')}>
                    <MCIcon name={'star-outline'} size={35} color={Colors.primary}  />
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    headerMainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:totalSize(12),
        
    },
    profileIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        left: 15
    },
    wishlistIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        right: 10
    },
    treviIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        
    },
});