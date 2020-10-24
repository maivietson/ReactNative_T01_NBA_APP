import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import { connect } from 'react-redux';
import { getCategoryVideos } from '../../../store/actions/video_action/video_cat_actions';

class HomeVideos extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCategoryVideos());
    }

    renderCategoryVideo = (value) => {
        return (
            value.data ? value.data.map((item, i) => (
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("ListVideos", {name: `${item.title}`, catID: `${item.catID}`}) }
                    key={i}
                >
                    <View style={styles.cardContainer}>
                        <View>
                            <Image 
                                style={{height: 180, justifyContent: 'space-around'}}
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
            <ScrollView style={{}}>
                { this.renderCategoryVideo(this.props.VideoCats) }
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        VideoCats: state.VideoCats
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'fff',
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

export default connect(mapStateToProps)(HomeVideos);