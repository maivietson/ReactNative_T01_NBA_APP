import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Detail from './details';
import Home from './home';
import AlbumPic from './album';

const stack = createStackNavigator();

export default class PictureHome extends Component {

    render() {
        return(
            <stack.Navigator screenOptions={{
                headerStyle: {
                  backgroundColor: '#2196F3',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerTitleAlign: 'center'
            }}
            >
                <stack.Screen 
                    name="Home"
                    component={ Home }
                    options={{
                        headerShown: false
                    }}
                />

                <stack.Screen 
                    name="AlbumPic"
                    component={AlbumPic}
                    options={
                        ({ route }) => ({ title: route.params.name })
                    }
                />

                <stack.Screen 
                    name="DetailPicture"
                    component={Detail}
                    options={
                        ({ route }) => ({ title: route.params.name })
                    }
                />
            </stack.Navigator>
        )
    }
}