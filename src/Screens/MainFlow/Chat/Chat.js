
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { GiftedChat,Bubble,InputToolbar,Actions,ActionsProps,} from 'react-native-gifted-chat'
import { width, height, totalSize } from 'react-native-dimension';
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

export default class Chat extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        messages: [],
        optionBool: false,
    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

     renderActions(props) {
        return (
          <Actions
            {...props}
           
            icon={() => (
              <Entypo name={'camera'} size={20} color={'gray'} />
            )}
            onSend={args => console.log(args)}
          />
        )
      }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    renderBubble(props) {
        return (
          <Bubble
          {...props}
            wrapperStyle={{
              left: {
                backgroundColor: '#d6cff1',
              },
              right:{
                backgroundColor: '#5133b4',
              }
            }}
          />
        );
      }
      renderSend(props) {
        return (
          <TouchableOpacity onPress={() => props.onSend({text: props.text})} style={{height:totalSize(3.3),width:totalSize(3.3),borderRadius:totalSize(3.3),backgroundColor:'#5133b4',alignItems:'center',justifyContent:'center',bottom:totalSize(1.8),right:3}}>
              <AntDesign name={'arrowup'} size={20} color={'white'}/>
          </TouchableOpacity>
        );
      }
      renderInputToolbar (props) {
        //Add the extra styles via containerStyle
       return <InputToolbar {...props} containerStyle={{width:'90%',borderWidth:1,borderColor:'gray',borderTopWidth: 1, borderTopColor: 'gray',height:35,left:15,bottom:5,borderRadius:30}}/>
     }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerMainContainer}>
                    <TouchableOpacity style={styles.menuContainer} onPress={() => this.props.navigation.goBack()}>
                        <Entypo name={'chevron-left'} size={35} color={Colors.white} style={{ left: totalSize(2) }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: totalSize(2) }}>
                        <Image source={require('../../../../assets/profile/1.jpg')} style={{ width: totalSize(4), height: totalSize(4), borderRadius: 50, borderWidth: 2, borderColor: Colors.white }} />
                        <Text style={styles.headerText}>John</Text>

                    </View>

                    <TouchableOpacity style={styles.menuContainer} onPress={() => this.setState({ optionBool: !this.state.optionBool })}>
                        <SimpleLineIcons name={'options-vertical'} size={20} color={Colors.white} style={{ right: totalSize(2) }} />
                    </TouchableOpacity>
                </View>
                {this.state.optionBool === true ? (
                    <View style={styles.optionContainer}>
                        <TouchableOpacity style={{width: totalSize(13), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                            <Text style={{marginVertical: totalSize(1), fontSize: totalSize(1.7), color: Colors.gray}}>Unmatch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: totalSize(10), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginVertical: totalSize(1)}}>
                            <Text style={{marginVertical: totalSize(1), fontSize: totalSize(1.7), color: Colors.gray}}>Report</Text>
                        </TouchableOpacity>
                    </View>
                ) : null}

                <GiftedChat
                    messages={this.state.messages}
                    style={{ marginBottom: 55 }}
                    renderBubble={this.renderBubble}
                    renderInputToolbar={this.renderInputToolbar} 
                    renderSend={this.renderSend}
                    onSend={messages => this.onSend(messages)}
                    renderActions={this.renderActions}
                    multiline ={false}
                    user={{
                        _id: 1,
                    }}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerMainContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#acb3bb',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:totalSize(12),
        paddingTop:totalSize(4)
    },
    headerText: {
        fontWeight: '700',
        color: Colors.white,
        fontSize: totalSize(2.8),
        marginLeft: totalSize(1)
    },
    optionContainer: {
        width: '100%',
        backgroundColor: '#acb3bb',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    // menuContainer: {
    //     marginTop: responsiveHeight(5),
    //     marginLeft: responsiveWidth(4),
    //     marginBottom: responsiveHeight(2)
    // },


});

