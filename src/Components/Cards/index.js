import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors } from '../../Themes/Colors';
import { Sizes } from '../../Themes/Sizes';
import { AppStyles } from '../../Themes/AppStyles'
import { Wrapper, RowWrapper } from '../wrappers/index';
import { Spacer } from '../spacers/index';
import { LineHorizontal } from '../lines/index';
import { TinyTitle, SmallText } from '../text/index';

export const TitleInfoCard = props => {
    const { containerStyle, title, info, hideLine,shadow ,onPress} = props
    return (
       <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <Wrapper  style={[styles.container,shadow?AppStyles.shadowStrong:null,containerStyle]}>
            <Spacer height={Sizes.baseMargin} />
            <RowWrapper>
                <TinyTitle style={[AppStyles.textColorPrimary]}>{title}</TinyTitle>
                {
                    info ?
                        <SmallText style={[AppStyles.textGray]}>{info}</SmallText>
                        :
                        null
                }
            </RowWrapper>
            <Spacer height={Sizes.baseMargin} />
            {
                hideLine?
                null
                :
                <LineHorizontal

            />
            }
        </Wrapper>
       </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: 'white'
    }
})