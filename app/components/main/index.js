import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Games from './games/index';
import News from './news/index';

const Tab = createBottomTabNavigator();

export default class MainComponent extends Component {
  render() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Games" component={Games} />
            <Tab.Screen name="News" component={News} />
        </Tab.Navigator>
    );
  }
}

// const styles = StyleSheet.create({

// });

