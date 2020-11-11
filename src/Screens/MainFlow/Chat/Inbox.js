
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { totalSize } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Entypo from 'react-native-vector-icons/Entypo'

const Colors = {
    purple: '#651a93',
    orange: '#f9c400',
    whisper: '#f0edf4',
    white: '#ffffff',
    steel: '#cccccc',
    black: '#000000',
    gray: 'gray',
    transparent: 'transparent',
    background: '#eaeaf2'
}
export default class Inbox extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        data: [
            { id: 1, image: require('../../../../assets/profile/1.jpg'), name: "Name - 1", message: "Testing Message ABC",unread:5 },
            { id: 2, image: require('../../../../assets/profile/2.jpg'), name: "Name - 2", message: "Testing Message ABC",unread:0 },
            { id: 3, image: require('../../../../assets/profile/3.jpg'), name: "Name - 3", message: "Testing Message ABC",unread:7 },
            { id: 4, image: require('../../../../assets/profile/4.jpg'), name: "Name - 4", message: "Testing Message ABC",unread:2 },
            { id: 5, image: require('../../../../assets/profile/5.jpg'), name: "Name - 5", message: "Testing Message ABC",unread:0 },
            { id: 6, image: require('../../../../assets/profile/6.jpg'), name: "Name - 6", message: "Testing Message ABC",unread:0 },
        ]
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor={"transparent"} barStyle={"light-content"}/>
                    <LinearGradient 
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={['#453dc4', '#453dc4', '#7876db']} style={styles.linearGradient}>
                        <TouchableOpacity style={styles.menuContainer} onPress={() => this.props.navigation.goBack()}>
                            <Entypo name={'chevron-left'} size={35} color={Colors.white} />
                        </TouchableOpacity>
                        <View style={{ width: '78%', alignItems: 'center', }}>
                            <Text style={styles.buttonText}>Amazon Echo</Text>
                        </View>
                        <TouchableOpacity style={styles.menuContainer}>
                            <SimpleLineIcons name={'options-vertical'} size={20} color={Colors.white} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <View style={styles.newMatchContainer}>
                        <Text style={styles.headingStyle}>New Matches</Text>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.data}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={styles.horizontalNewMatchContainer} onPress={() => this.props.navigation.navigate('NewChat')}>
                                    <Image source={item.image} style={{ width: '100%', height: '100%', borderRadius: 50 }} />
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                   
                        <Text style={[styles.headingStyle, { marginLeft: totalSize(3), marginTop: totalSize(2) }]}>Messages</Text>
                       <ScrollView>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={this.state.data}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={styles.messagesContainer} onPress={() => this.props.navigation.navigate('Chat')}>
                                    <View style={styles.messagesContainer1}>
                                        { item.unread > 0 ?
                                        <View style={styles.badge}>
                                            <Text style={{color:'white'}}>{item.unread}</Text>
                                        </View>
                                        : null
                                         }
                                        <Image source={item.image} style={styles.messageImage} />
                                        <View style={{ marginLeft: totalSize(1) }}>
                                            <Text style={{ fontSize: totalSize(1.7), fontWeight: 'bold', color: Colors.purple }}>{item.name}</Text>
                                            <Text style={{ color: Colors.gray, fontWeight: '400' }}>{item.message}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        /> 
                    </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    linearGradient: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height:totalSize(12),
        paddingTop:totalSize(4)
    },
    buttonText: {
        fontSize: totalSize(2.8),
        marginVertical: totalSize(2),
        color: Colors.white,
        fontWeight: 'bold'
    },
    newMatchContainer: {
        marginTop: totalSize(2),
        marginLeft: totalSize(3)
    },
    headingStyle: {
        fontSize: totalSize(2.5),
        color: Colors.purple,
        fontWeight: 'bold'
    },
    horizontalNewMatchContainer: {
        width: totalSize(10),
        height: totalSize(10),
        marginTop: totalSize(1),
        marginLeft: totalSize(1),
        borderWidth: 5,
        borderColor: Colors.white,
        borderRadius: 50
    },
    messagesContainer: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.white,
        marginTop: totalSize(1),
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7
    },
    messagesContainer1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    messageImage: {
        width: totalSize(8),
        height: totalSize(8),
        borderRadius: 50,
        marginLeft: totalSize(1),
        marginVertical: totalSize(1)
    },
    badge:{
        height:totalSize(3),
        width:totalSize(3),
        borderRadius:totalSize(3),
        backgroundColor:'#e5bd0b',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        zIndex:1,
        bottom:totalSize(7),
        left:5
    }
});
