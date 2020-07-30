import React from 'react';
import { Platform, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './components/auth/index';
import MainScreen from './components/main/index';

const Stack = createStackNavigator();

export default function RootNavigator(props) {
    return (
        <Stack.Navigator 
            initialRouteName= {props.isAuth ? "SignIn" : "MainScreen"} 
        >
            <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{
                    headerShown: false
                }}
                />
            <Stack.Screen 
                name="MainScreen" 
                component={MainScreen} 
                options={{
                    headerShown: false
                }}
                />
        </Stack.Navigator>
    )
}