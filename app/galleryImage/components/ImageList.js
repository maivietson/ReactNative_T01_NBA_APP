import React from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, Text, Dimensions } from "react-native";
import PropTypes from 'prop-types';

// ImageList.Props = {
//     images: PropTypes.array,
//     onPress: PropTypes.func,
//     shift: PropTypes.number
// }

const IMAGE_WIDTH = 120;
const IMAGE_HEIGH = 120;

const screenWidth = Math.round(Dimensions.get('window').width);

export default function ImageList(props) {
    let imgesResource = [];
    imgesResource = props.images;
    // console.log(imgesResource)

    console.log(screenWidth);

    return (
        <ScrollView
            horizontal
            style={styles.root}
            contentOffset={{ x: props.shift * IMAGE_WIDTH, y: 0 }}
            contentContainerStyle={styles.container}
        >
            {imgesResource.map((imageUrl, index) => (
                <TouchableOpacity
                    style={styles.button}
                    key={`${imageUrl}_${index}`}
                    activeOpacity={0.8}
                    onPress={() => props.onPress(index)}
                >
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  root: { flexGrow: 0 },
  container: {
    flex: 0,
    paddingLeft: 10,
    marginBottom: 10
  },
  button: {
    marginRight: 10
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGH,
    borderRadius: 10
  }
});
