import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors } from '../../Themes/Colors';
import { Sizes } from '../../Themes/Sizes';
import { AppStyles } from '../../Themes/AppStyles';
import { IconWithText } from '../icons/index';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { RowWrapperBasic } from '../wrappers/index';
import { TinyTitle } from '../text/index';
import { Spacer } from '../spacers/index';

export const LogoMain = props => {
  const {size,color } = props
  return (
   <Icon
   name="alpha-t"
   type="material-community"
   size={size?size:Sizes.icons.xxl}
   color={color?color:Colors.snow}
   />
  );
}
