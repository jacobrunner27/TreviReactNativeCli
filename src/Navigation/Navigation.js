import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Wish2 } from '../Screens/Wish/Wish2';
import { MyWishlist } from '../Screens/MainFlow/MyWishlist/MyWishlist';
import { Offers } from '../Screens/MainFlow/Offers/Offers';
import { Home } from '../Screens/MainFlow/Home';
import { NewChat } from '../Screens/MainFlow/Chat/NewChat';
import { Inbox } from '../Screens/MainFlow/Chat/Inbox';
import { Chat } from '../Screens/MainFlow/Chat/Chat'
import { AccountSettings } from '../Screens/MainFlow/Profile/accountSettings';
import { EditProfile } from '../Screens/MainFlow/Profile/editProfile';
import { Profile } from '../Screens/MainFlow/Profile/profile';
import { routes } from '../services/constants/index';


const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={routes.profile}
                initialRouteName="home"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                   name="home"
                   component={Home}
               />
                <Stack.Screen
                    name="wish"
                    component={Wish}
                />
                <Stack.Screen
                    name="myWishlist"
                    component={MyWishlist}
                    options={{ title: 'My Wishlist' }}
                />
                <Stack.Screen
                    name="offers"
                    component={Offers}
                    options={{ title: 'Offers' }}
                />
                <Stack.Screen
                    name="offersTinder"
                    component={OffersTinder}
                    options={{ title: 'Offers' }}
                />
                <Stack.Screen
                    name="OffersTinderList"
                    component={OffersTinderList}
                    options={{ title: 'Offers' }}
                />
                <Stack.Screen
                    name="trending"
                    component={Trending}
                    options={{ title: 'Trending' }}
                />
                <Stack.Screen
                    name="Inbox"
                    component={Inbox}
                    options={{ title: 'Inbox' }}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{ title: 'Chat' }}
                />
                <Stack.Screen
                    name="NewChat"
                    component={NewChat}
                    options={{ title: 'NewChat' }}
                />
                <Stack.Screen
                    name={routes.profile}
                    component={Profile}
                    options={{
                        headerShown: false
                    }}
                />
                 <Stack.Screen
                    name={routes.editProfile}
                    component={EditProfile}
                    options={{
                        headerShown: false
                    }}
                />
                  <Stack.Screen
                    name={routes.accountSettings}
                    component={AccountSettings}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
