import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Details from './details';

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('DetailNews', {name: 'Details'});
        }}
      />
    </View>
  )
}

export default class NewsComponent extends Component {
  render() {
    return (
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center'
        }}>
          <Stack.Screen 
            name="News"
            component={Home}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="DetailNews"
            component={Details}
            options={
              ({ route }) => ({ title: route.params.name })
            }
          />
        </Stack.Navigator>
    );
  }
}

// const styles = StyleSheet.create({

// });

