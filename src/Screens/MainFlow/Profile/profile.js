import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TitleInfoCard } from '../../../Components/Cards/index';
import { MainWrapper } from '../../../Components/wrappers/index';
import { HeaderPrimary } from '../../../Components/headers/index';
import { BackIcon } from '../../../Components/icons/index';
import { LogoMain } from '../../../Components/logos/index';
import { MainWrapperPrimary } from '../../../Components/wrappers/index';
import { Wrapper } from '../../../Components/wrappers/index';
import { SmallTitle } from '../../../Components/text/index';
import { TinyTitle } from '../../../Components/text/index';
import { SmallText } from '../../../Components/text/index';
import { Spacer } from '../../../Components/spacers/index';
import { ImageRound } from '../../../Components/images/index';

import { CardWrapper, AbsoluteWrapper } from '../../../Components/wrappers/index';
import { appImages } from '../../../Themes/Assets';
import { Colors } from '../../../Themes/Colors';
import { AppStyles } from '../../../Themes/AppStyles';
import { Sizes } from '../../../Themes/Sizes';

import { totalSize } from 'react-native-dimension';
import { routes } from '../../../services/constants/index';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "Denver, born and raised!\nI'am always looking for some new used clothes. Mostly here to wish but i'll sell thigs here occasionally."
        };
    }

    render() {
        const { info } = this.state
        const { navigate } = this.props.navigation
        return (
            <MainWrapperPrimary style={[{ justifyContent: 'space-between', }]}>
                <Wrapper>
                    <HeaderPrimary
                        headerLeft={
                            <LogoMain />
                        }
                        shadowOff
                    //  title="Profile"
                    />
                    <Spacer height={Sizes.baseMargin*2} />
                    <CardWrapper style={[styles.infoCard]}>
                        <AbsoluteWrapper style={[styles.imageContainer]}>
                            <ImageRound
                                source={{ uri: appImages.user3Url }}
                                size={totalSize(10)}
                            />
                        </AbsoluteWrapper>
                        <Spacer height={Sizes.baseMargin} />
                        <SmallTitle style={[styles.name]}>Alex Will</SmallTitle>
                        <TinyTitle style={[styles.profession]}>Denver, CO</TinyTitle>
                        <Spacer height={Sizes.smallMargin} />
                        <SmallText style={[styles.info]}>{info}</SmallText>
                    </CardWrapper>
                </Wrapper>
                <Wrapper animation="fadeInUpBig">
                    <TitleInfoCard
                        title="Edit Profile"
                        shadow
                        onPress={() => navigate(routes.editProfile)}
                    />
                    <TitleInfoCard
                        title="About Trevi"
                    />
                    <TitleInfoCard
                        title="Transection History"
                    />
                    <TitleInfoCard
                        title="Recomandations"
                    />
                    <TitleInfoCard
                        title="Account Settings"
                        onPress={() => navigate(routes.accountSettings)}
                    />
                </Wrapper>
            </MainWrapperPrimary>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    name: {
        ...AppStyles.textColorPrimary,
        ...AppStyles.textCenter,
        ...AppStyles.textBold
    },
    profession: {
        ...AppStyles.textColorPrimary,
        ...AppStyles.textCenter,
        //...AppStyles.textBold
    },
    info: {
        ...AppStyles.textGray,
        lineHeight: totalSize(1.5),
        borderRadius: Sizes.cardRadius
    },
    infoCard: {
        ...AppStyles.shadow,
        padding: Sizes.smallMargin
    },
    imageContainer: {
        top: -totalSize(9),
        alignSelf: 'center',
        padding: Sizes.tinyMargin,
        backgroundColor: Colors.appBgColor1,
        // borderTopRightRadius:100,
        // borderTopLeftRadius:100,
        // borderBottomLeftRadius:50,
        // borderBottomRightRadius:50,
        borderRadius: 100,
        elevation: 0
    },
    imageProfile: {

    }
})