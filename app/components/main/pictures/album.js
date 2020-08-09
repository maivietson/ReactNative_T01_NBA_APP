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
import { getAlbums, getAlbumsDetails } from '../../../store/actions/picture_action/album_actions';
import { bindActionCreators } from 'redux';

import Moment from 'moment';

class AlbumPic extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getAlbums(this.props.route.params.catID));
    //getAlbums(this.props.route.params.catID);
  }

  renderAlbums = (value) => {
    //console.log(value);
    return(
        value.data ? value.data.map((item, i) => (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate("DetailPicture", {name: `${item.model}`, catID: this.props.route.params.catID, albumID:`${item.content}`})}
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
                        <Text style={styles.titleCard}>{item.model}</Text>
                        <View style={styles.bottomCard}>
                            <Text style={styles.bottomCardText}>{item.title}</Text>
                            <Text style={styles.bottomCardText}> - Posted at: {Moment(item.date).format('d MMMM')}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )): null
    )
  }
  
  render() {
    return (
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        { this.renderAlbums(this.props.Album) }
      </ScrollView>
    );
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

function mapStateToProps(state) {
    //console.log(state)
    return {
        Album: state.Album
    }
}

export default connect(mapStateToProps)(AlbumPic);

