import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider, TextInput, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, ImageBackground } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import image1 from '../../../assets/Images/image1.jpg'
import image2 from '../../../assets/Images/image2.jpg'
import Swipeout from 'react-native-swipeout';
import IonIcon from 'react-native-vector-icons/Ionicons';


const Colors = {
    purple: '#651a93',
    orange: '#f9c400',
    whisper: '#f0edf4',
    white: '#ffffff',
    steel: '#cccccc',
    black: '#000000',
    gray: 'gray',
    blue: '#585AD6',
    transparent: 'transparent'
}


class MyGrantlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories_list: [
                {
                    title: 'Book',
                    iconName: 'book-open-page-variant',
                    iconType: 'material-community',
                    notifications: null
                },
                {
                    title: 'Car',
                    iconName: 'car-side',
                    iconType: 'material-community',
                    notifications: null
                },
                {
                    title: 'Tools',
                    iconName: 'toolbox',
                    iconType: 'material-community',
                    notifications: 5
                },
                {
                    title: 'Technology',
                    iconName: 'lightbulb-on',
                    iconType: 'material-community',
                    notifications: 3
                },
                {
                    title: 'Indoor',
                    iconName: 'home',
                    iconType: 'material-community',
                    notifications: 3

                },
                {
                    title: 'All',
                    iconName: 'check-all',
                    iconType: 'material-community',
                    notifications: null
                },
                {
                    title: 'Clothes',
                    iconName: 'tshirt-crew',
                    iconType: 'material-community',
                    notifications: 2
                },
            ],
            selectedCategoryIndex: 0,
            products_list: [
                {
                    image: image1,
                    title: 'iphone Wireless Charger',
                    price: '$40-60',
                    notifications: 2
                },
                {
                    image: image2,
                    title: 'Amazon Fire TV Stick',
                    price: '$45-60',
                    notifications: 5
                },
                {
                    image: image1,
                    title: 'MacBook Pro 13"',
                    price: '$900-1200',
                    notifications: null
                },
                {
                    image: image2,
                    title: 'Xbox 360',
                    price: '$50-100',
                    notifications: null
                },
                {
                    image: image1,
                    title: 'Unlocked iphone 8 Plus',
                    price: '$500-650',
                    notifications: null
                },
                {
                    image: image1,
                    title: 'iphone Wireless Charger',
                    price: '$40-60',
                    notifications: 2
                },
                {
                    image: image2,
                    title: 'Amazon Fire TV Stick',
                    price: '$45-60',
                    notifications: null
                },
                {
                    image: image1,
                    title: 'MacBook Pro 13"',
                    price: '$900-1200',
                    notifications: null
                },
                {
                    image: image2,
                    title: 'Xbox 360',
                    price: '$50-100',
                    notifications: 6
                },
                {
                    image: image1,
                    title: 'Unlocked iphone 8 Plus',
                    price: '$500-650',
                    notifications: null
                },
            ]
        };
    }

    LineHorizontal = ({ style }) => {
        return (
            <View style={[styles.lineHorizontal, style]}></View>
        )
    }
    renderCategoryItem = ({ item, index }) => {
        return (
            <View style={{ padding: 5 }}>
                <View style={index === this.state.selectedCategoryIndex + 3 ? [styles.categorySlideActive, styles.shadow] : [styles.categorySlideInactive, styles.shadow]}>
                    <Icon
                        name={item.iconName}
                        type={item.iconType}
                        color={index === this.state.selectedCategoryIndex + 3 ? Colors.blue : Colors.steel}
                        size={totalSize(2.5)}
                    />
                    {
                        item.notifications ?
                            <View style={[{ height: totalSize(2), width: totalSize(2), borderRadius: 100, backgroundColor: Colors.orange, position: 'absolute', top: -2.5, left: -2.5, alignItems: 'center', justifyContent: 'center' }]}>
                                <Text style={{ color: Colors.white, fontSize: totalSize(1.4) }}>{item.notifications}</Text>
                            </View>
                            :
                            null
                    }
                </View>
            </View>
        );
    }
    renderProducts = ({ data, onPressDelete, onPressSold }) => {
        const swipeoutBtns = [
            {
                text: 'Delete',
                backgroundColor: Colors.orange,
                onPress: onPressDelete
            },
            {
                text: 'Mark Sold',
                backgroundColor: Colors.steel,
                onPress: onPressSold
            },

        ]
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    ref={ref => (this.timerFlatlistRef = ref)}
                    data={data}
                    renderItem={({ item, index }) => {

                        return (
                            <Swipeout
                                right={swipeoutBtns}
                                backgroundColor={Colors.whisper}
                                style={[{ marginRight: width(5), borderRadius: 25, marginLeft: 0, marginTop: index === 0 ? height(2) : 0, marginBottom: index === data.length - 1 ? height(10) : height(2) }]}
                            >
                                <View style={[{ backgroundColor: Colors.white, borderRadius: 25, marginLeft: width(5) }]}>
                                    <View style={{ flexDirection: 'row', margin: 5 }}>
                                        <View style={{ flex: 3 }}>
                                            <Image
                                                source={item.image}
                                                style={{ height: index === 2 || index === 5 ? 150 : 100, width: null, borderRadius: 25 }}
                                            />
                                        </View>
                                        <View style={{ flex: 7, padding: 10, backgroundColor: 'transparent', justifyContent: 'space-between' }}>
                                            <Text style={styles.productTitle}>{item.title}</Text>
                                            <Text style={styles.productPrice}>{item.price}</Text>
                                        </View>
                                    </View>
                                    {
                                        item.notifications ?
                                            <View style={[styles.shadow, { height: totalSize(2.5), width: totalSize(2.5), borderRadius: 100, backgroundColor: Colors.orange, position: 'absolute', top: 1, left: -2.5, alignItems: 'center', justifyContent: 'center' }]}>
                                                <Text style={{ color: Colors.white, fontSize: totalSize(1.5) }}>{item.notifications}</Text>
                                            </View>
                                            :
                                            null
                                    }
                                </View>
                            </Swipeout>
                        )
                    }}
                />
            </View>
        )
    }
    render() {
        const { categories_list, selectedCategoryIndex, products_list } = this.state
        const flatListRef = null
        return (
            <View style={styles.mainContainer}>

                <View style={styles.headerMainContainer}>
                    <ImageBackground source={require('../../../assets/Images/homeScreenHeader.png')} style={styles.backgroundImage}>
                        {this.props.children}  

                        <TouchableOpacity onPress={()=> navigation.navigate('MyGrantlist')} style={styles.profileIcon}>
                        <Image source={require('../../../assets/profile/1.jpg')} style={{ width: totalSize(4), height: totalSize(4), borderRadius: 50, borderWidth: 2, borderColor: Colors.white }} />
                        </TouchableOpacity>   

                        <TouchableOpacity style={styles.wishlistIcon} onPress={() => this.props.navigation.navigate('MyGrantlist')}>
                        <IonIcon name={'reader-outline'} size={35} color={Colors.white}  />
                        </TouchableOpacity> 

                        <TouchableOpacity style={styles.treviIcon}>
                        <Image source={require('../../../assets/Images/treviLogo.png')} style={{ width: totalSize(4), height: totalSize(4), }} />
                        </TouchableOpacity>

                     </ImageBackground>
                     
                </View>

                <View>
                    <View style={[{ justifyContent: 'center', backgroundColor: Colors.white, paddingVertical: height(1) }, styles.shadow]}>
                        <this.LineHorizontal style={{ position: 'absolute', right: 0, left: 0, borderBottomColor: Colors.steel, borderBottomWidth: 2 }} />
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={categories_list}
                            layout={'default'}
                            layoutCardOffset={`10`}
                            activeSlideOffset={10}
                            enableSnap={true}
                            renderItem={this.renderCategoryItem}
                            sliderWidth={width(100)}
                            itemWidth={width(15)}
                            loop={true}
                            inactiveSlideOpacity={1}
                            inactiveSlideScale={0.8}
                            onSnapToItem={(index) => this.setState({ selectedCategoryIndex: index })}
                        />
                    </View>
                </View>
                <View style={[styles.compContainer, { marginVertical: height(1.5) }]}>
                    <Text style={[styles.title, {}]}>{categories_list[selectedCategoryIndex].title}</Text>
                </View>
                
                <this.renderProducts
                    data={products_list}
                    ref={flatListRef}
                />
                
                <TouchableOpacity style={{ position: 'absolute', bottom: -totalSize(7.5), left: -totalSize(7.5), height: totalSize(15), width: totalSize(15), backgroundColor: Colors.blue, borderRadius: 100, alignItems: 'flex-end', padding: totalSize(2.5) }}>
                    <Icon
                        name="plus"
                        type="font-awesome"
                        color={Colors.white}
                        size={totalSize(4)}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>
                        this.timerFlatlistRef.scrollToIndex({
                            animated: true,
                            index: 0,
                        })
                    }
                    style={{ position: 'absolute', bottom: -totalSize(1), right: -totalSize(1), height: totalSize(6), width: totalSize(5), backgroundColor: Colors.blue, borderRadius: 10, alignItems: 'flex-start', padding: totalSize(1) }}>
                    <Icon
                        name="arrow-up"
                        type="font-awesome"
                        color={Colors.white}
                        size={totalSize(2)}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default MyGrantlist;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.whisper
    },
    compContainer: {
        marginHorizontal: width(5),
        marginVertical: height(2.5)
    },
    rowCompContainer: {
        marginHorizontal: width(5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: height(2.5)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadow: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: Colors.black,
        shadowOpacity: 0.25,
        elevation: 5
    },
    lineHorizontal: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.white,
        marginVertical: height(2.5)
    },
    buttonText: {
        fontSize: totalSize(2.5),
        fontWeight: 'bold',
        color: Colors.white
    },
    title: {
        fontSize: totalSize(2),
        fontWeight: 'bold',
        color: Colors.blue,
    },
    detail: {
        fontSize: totalSize(1.5),
        fontWeight: 'normal',
        color: Colors.blue,
    },
    productTitle: {
        fontSize: totalSize(1.5),
        fontWeight: 'bold',
        color: Colors.blue,
    },
    productPrice: {
        fontSize: totalSize(1.25),
        color: Colors.steel,
        textAlign: 'right'
    },
    SelectedItem: {
        fontSize: totalSize(1.6),
        fontWeight: '600',
        color: Colors.blue,
    },
    categorySlideInactive: {
        height: totalSize(6),
        width: totalSize(6),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignSelf: 'center',
    },
    categorySlideActive: {
        height: totalSize(6),
        width: totalSize(6),
        borderWidth: 2.5,
        borderColor: Colors.blue,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignSelf: 'center',
    },
    textCenter: {
        textAlign: 'center'
    },
    snapsliderContainer: {
        marginHorizontal: width(5)
    },
    snapslider: {
        // backgroundColor:'red'
    },
    snapsliderItemWrapper: {
        // backgroundColor:'red'
    },
    snapsliderItem: {
        color: 'red'
    },
    headerMainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:totalSize(12),
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: totalSize(14),
        alignItems: 'center',
        shadowOffset: { width: 3, height: 6 },
        shadowColor: Colors.black,
        shadowOpacity: 0.16,
        elevation: 5
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
})