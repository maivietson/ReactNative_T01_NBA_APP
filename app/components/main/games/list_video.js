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
import Moment from 'moment';
import { getListVideos } from '../../../store/actions/video_action/video_list_actions'

class ListVideos extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getListVideos(this.props.route.params.catID));
    }

    renderListVideos = (value) => {
        return (
            value.data ? value.data.map((item, i) => (
                <TouchableOpacity>
                    <View style={styles.cardContainer}>
                        <View>
                            <Image 
                                style={{height: 180, justifyContent:'space-around'}}
                                source={{uri:`${item.image}`}}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.contentCard}>
                            <Text style={styles.titleCard}>{item.videoName}</Text>
                            <View style={styles.bottomCard}>
                                <Text style={styles.bottomCardText}>{item.description}</Text>
                                <Text style={styles.bottomCardText}> - Posted at: {Moment(item.date).format('d MMMM')}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )) : null
        )
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#F0F0F0'}}>
                { this.renderListVideos(this.props.ListVideos) }
            </ScrollView>
        )
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
        fontFamily: 'Roboto-Bold',
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
        fontFamily: 'Roboto-Light',
        color: '#828282',
        fontSize: 12
    }
})

function mapStateToProps(state) {
    return {
        ListVideos: state.ListVideos
    }
}

export default connect(mapStateToProps)(ListVideos);