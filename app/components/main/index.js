import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Games from './games/index';
import News from './news/index';
import Pictures from './pictures/index';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default class MainComponent extends Component {
  render() {
    return (
        // <Tab.Navigator 
        //   tabBarOptions={{
        //     activeTintColor:'#fff',
        //     showLabel: false,
        //     activeBackgroundColor:'#00194b',
        //     inactiveBackgroundColor:'#001338',
        //   }}
        // >
        //     <Tab.Screen name="Games" component={Games} />
        //     <Tab.Screen name="News" component={News} />
        // </Tab.Navigator>
        <Tab.Navigator initialRouteName="News">
          <Tab.Screen 
            name="News" 
            component={News} 
            options={{
              tabBarLabel: 'News',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="filmstrip-box-multiple" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen 
            name="Pictures"
            component={Pictures}
            options={{
              tabBarLabel: 'Pictures',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="image-multiple" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen 
            name="Games" 
            component={Games} 
            options={{
              tabBarLabel: 'Videos',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="apps" color={color} size={26} />
              )
            }}
          />
        </Tab.Navigator>
    );
  }
}

// const styles = StyleSheet.create({

// });

