import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export const Props = {
    imageIndex: Number,
    imagesCount: Number
};

export default function ImageFooter(props) {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>{`${props.imageIndex + 1} / ${props.imagesCount}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 64,
        backgroundColor: '#00000077',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        color: '#FFF'
    }
})