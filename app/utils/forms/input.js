import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Picker
  } from 'react-native';

  export default function Input(props) {
      let template = null;

      switch(props.type) {
          case "textinput":
            template = 
            <TextInput
                {...props}
                style={[styles.input, props.overrideStyle]}
            />
          break;
          default:
              return template;
      }

      return template;
  }

  const styles = StyleSheet.create({
      input: {
          width: '100%',
          borderBottomWidth: 2,
          borderBottomColor:'#eaeaea',
          fontSize: 16,
          padding: 5,
          marginTop: 10
      }
  })