import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { MainWrapperPrimary } from '../../../Components/wrappers/index';
import { HeaderPrimary } from '../../../Components/headers/index';
import { BackIcon } from '../../../Components/icons/index';
import { LogoMain } from '../../../Components/logos/index';
import { Wrapper } from '../../../Components/wrappers/index';
import { TitleInfoCard } from '../../../Components/Cards/index';
import { InputTitle } from '../../../Components/text/index';
import { ComponentWrapper } from '../../../Components/wrappers/index';
import { Spacer } from '../../../Components/spacers/index';

import sizes from '../../../Themes/Sizes';

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props
        return (
            <MainWrapperPrimary>
                <HeaderPrimary
                    headerLeft={<BackIcon onPress={() => navigation.goBack()} />}
                    title="Account Settings"
                    headerRight={
                        <LogoMain />
                    }
                />
                <Wrapper flex={1}>
                    <Wrapper animation="fadeInUpBig">
                        <ComponentWrapper>
                            <Spacer height={sizes.baseMargin} />
                            <InputTitle>Account</InputTitle>
                            <Spacer height={sizes.tinyMargin} />
                        </ComponentWrapper>
                        <TitleInfoCard
                            title="Name"
                            info="Alex Will"
                            shadow
                        />
                        <TitleInfoCard
                            title="Email"
                            info="alexw225@gmail.com"
                        />
                        <TitleInfoCard
                            title="Location"
                            info="Denver, CO."
                        />
                        <TitleInfoCard
                            title="Add Facebook"
                        />
                        <TitleInfoCard
                            title="Change Password"
                        />
                    </Wrapper>
                    <Wrapper animation="fadeInUpBig">
                        <ComponentWrapper>
                            <Spacer height={sizes.baseMargin} />
                            <InputTitle>Info</InputTitle>
                            <Spacer height={sizes.tinyMargin} />
                        </ComponentWrapper>
                        <TitleInfoCard
                            title="About Trevi"
                            hideLine
                            //info="Alex Will"
                            //shadow
                        />
                    </Wrapper>
                </Wrapper>
            </MainWrapperPrimary>
        );
    }
}

export default AccountSettings;
