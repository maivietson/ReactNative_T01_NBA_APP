import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Dimensions,
    FlatList
} from 'react-native';

import ImageModal from 'react-native-image-modal';

let IMAGE_WIDTH = 0;
let IMAGE_HEIGHT = 0;
let IMAGE_OUTLINE = 5;

function calculateImageSize() {
    const screenWidth = Math.round(Dimensions.get('screen').width);
    IMAGE_WIDTH = (screenWidth / 3) - 2 * IMAGE_OUTLINE;

    const screenHeight = Math.round(Dimensions.get('screen').width);
    IMAGE_HEIGHT = (screenHeight / 3) - 2 * IMAGE_OUTLINE;
}

export default function ImageGallery(props) {

    calculateImageSize();

    // console.log(IMAGE_WIDTH);
    // console.log(IMAGE_HEIGHT);

    return(
        // <View style={styles.root}>
        //     <FlatList 
        //         data={props.imagesResource}
        //         renderItem={({item, index}) => (
        //             <View style={{ flex: 1, flexDirection: 'column', margin: 5}}>
        //                 <TouchableOpacity
        //                     style={styles.button}
        //                     key={`${item.uri}_${index}`}
        //                     activeOpacity={0.8}
        //                     onPress={() => props.onPress(index)}
        //                 >
        //                     <Image source={{ uri: `${item.uri}`}} style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT, borderRadius: 10}} />   
        //                 </TouchableOpacity>
        //             </View>
        //         )}
        //         numColumns={3}
        //         keyExtractor={(item, index) => index.toString()}
        //     />
        // </View>
        <View style={styles.root}>
            <FlatList 
                data={props.imagesResource}
                renderItem={({item, index}) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 5}}>
                        <ImageModal 
                            resizeMode="contain"
                            imageBackgroundColor="#000"
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: IMAGE_HEIGHT,
                                width: IMAGE_WIDTH,
                                borderRadius: 10
                            }}
                            source={{
                                uri: `${item.uri}`
                            }}
                        />
                    </View>
                )}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    root: { flex: 1},
    button: {
        margin: 0
    }
})