import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'

import ListVideos from './list_video';
import Home from './home';

const stack = createStackNavigator();

export default class GameComponent extends Component {
  render() {
    return (
      <stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#2196F3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
      }}>
        <stack.Screen 
          name="Home"
          component= { Home }
          options={{
            headerShown: false
          }}
        />

        <stack.Screen 
          name="ListVideos"
          component={ ListVideos }
          options={
            ({ route }) => ({ title: route.params.name })
          }
        />
      </stack.Navigator>
    );
  }
}

// const styles = StyleSheet.create({

// });

