import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { getPictures } from '../../../store/actions/picture_action/picture_actions';

class HomePicture extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getPictures());
    }

    renderPicture = (value) => {
        return (
            // console.log(value);
            value.data ? value.data.map((item, i) => (
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("AlbumPic", {name: `${item.title}`, catID: `${item.catID}`}) }
                    key={i}
                >
                    <View style={styles.cardContainer}>
                        <View>
                            <Image 
                                style={{height:180, justifyContent:'space-around'}}
                                source={{uri:`${item.image}`}}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.contentCard}>
                            <Text style={styles.titleCard}>{item.title}</Text>
                            <View style={styles.bottomCard}>
                                <Text style={styles.bottomCardText}>{item.description}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )) : null
        )
    }

    render() {
        return(
            <ScrollView style={{backgroundColor: '#F0F0F0'}}>
                { this.renderPicture(this.props.Pic) }
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        Pic: state.Pic
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#dddddd',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2,
    },
    contentCard: {
        borderWidth: 1,
        borderColor: '#dddddd'
    },
    titleCard: {
        color: '#232323',
        fontSize: 18,
        padding: 10
    },
    bottomCard: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6',
        padding: 10
    },
    bottomCardText: {
        color: '#828282',
        fontSize: 12
    }
})

export default connect(mapStateToProps)(HomePicture);