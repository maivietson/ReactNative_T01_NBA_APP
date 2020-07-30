import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import AuthLogo from './authLogo';
import AuthForm from './authForm';

export default function AuthComponent({ navigation }) {

    // const [loading, setLoading] = useState(true);
    let loading = false;
    // state = {
    //     loading: false
    // }

    goNext = () => {
        navigation.navigate('MainScreen');
    }

    setLoading = () => {
        loading = true;
    }

    if(loading) {
        return(
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        );
    } else {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <AuthLogo />
                    <AuthForm goMain={this.goNext} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d428a',
        padding: 50
    },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

