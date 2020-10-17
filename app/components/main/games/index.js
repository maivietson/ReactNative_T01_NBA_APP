import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator();

export default class GameComponent extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to Game Component</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({

// });

