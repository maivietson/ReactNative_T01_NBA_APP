import React from 'react';
import {
    View,
    Image
  } from 'react-native';
  import LogoImage from '../../assets/images/nba_login_logo.png';

  export default function LogoComponent() {
      return (
          <View style={{ alignItems:'center' }}>
              <Image 
                source={LogoImage}
                resizeMode='center'
                style={{
                    width: 170,
                    height: 150
                }}
              />
          </View>
      )
  }