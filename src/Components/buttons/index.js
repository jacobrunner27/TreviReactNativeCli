import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';

import { Colors } from '../../Themes/Colors';
import { AppStyles } from '../../Themes/AppStyles';
import { FontSize } from '../../Themes/FontSize';
import { Sizes } from '../../Themes/Sizes';


export const ButtonColored = props => {
    const { text, onPress, buttonStyle, textStyle, iconName, iconType, iconSize, iconColor, iconStyle, tintColor } = props
    return (
        <TouchableOpacity onPress={onPress} style={[AppStyles.buttonColord, { marginHorizontal: width(5), borderRadius: Sizes.buttonRadius, height: height(6) }, AppStyles.shadowColored, buttonStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : totalSize(3)}
                            color={tintColor ? tintColor : Colors.snow}
                            iconStyle={[{ marginRight: width(2.5) }, iconStyle]}

                        />
                        :
                        null
                }
                <Text style={[AppStyles.buttonText, { color: tintColor ? tintColor : Colors.snow, FontSize: FontSize.regular }, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const ButtonColoredSmall = props => {
    const { text, onPress,buttonColor, buttonStyle, customIcon,direction, textStyle, iconName, iconType, iconSize, iconColor, iconStyle,textColor } = props
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: Sizes.smallButtonRadius, paddingHorizontal: width(5), paddingVertical: height(1), backgroundColor: buttonColor?buttonColor:Colors.appColor1 }, buttonStyle]}>
        <View style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
            {
                customIcon ?
                    <CustomIcon
                    icon={customIcon}
                    size={iconSize ? iconSize : totalSize(2)}
                    color={iconColor ? iconColor : Colors.snow}
                    />
                    :
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : totalSize(2)}
                            color={iconColor ? iconColor : Colors.snow}
                            iconStyle={[{  }, iconStyle]}
                        />
                        :
                        null
            }
            <Text style={[AppStyles.buttonText, { color:textColor?textColor: Colors.snow, fontSize: FontSize.regular }, textStyle]}>  {text}  </Text>
        </View>
    </TouchableOpacity>
    );
}

export const ButtonBordered = props => {
    const { text, onPress, buttonStyle, textStyle, iconName, iconType, iconSize, iconColor, iconStyle,tintColor } = props
    return (
        <TouchableOpacity  onPress={onPress} style={[AppStyles.buttonBorderd,{ borderRadius: Sizes.buttonRadius ,height:height(6),borderColor:tintColor?tintColor:Colors.appColor1}, buttonStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={tintColor ? tintColor : Colors.appColor1}
                                iconStyle={[{ marginRight: width(2.5) }, iconStyle]}

                            />
                            :
                            null
                    }
                    <Text style={[AppStyles.buttonText, { color:tintColor?tintColor: Colors.appColor1 ,FontSize:FontSize.regular}, textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
    );
}

export const ButtonBorderedSmall = props => {
    const { text, onPress, buttonStyle,rowReverse, textStyle, iconName, iconType, iconSize, iconColor, iconStyle,tintColor } = props
    return (
        <TouchableOpacity  onPress={onPress} style={[ { borderRadius: 15 ,paddingHorizontal:width(5),paddingVertical:height(1),borderColor:tintColor?tintColor:Colors.appColor1,borderWidth:1}, buttonStyle]}>
                <View style={{ flexDirection: rowReverse?'row-reverse':'row', alignItems: 'center' }}>
                    {
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(2)}
                                color={tintColor ? tintColor : Colors.appColor1}
                                iconStyle={[{ marginHorizontal: width(2) }, iconStyle]}
                            />
                            :
                            null
                    }
                    <Text style={[AppStyles.buttonText, { color:tintColor?tintColor: Colors.appColor1 ,FontSize:FontSize.regular}, textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
    );
}


