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
import { getAlbumsDetails } from '../../../store/actions/picture_action/details_actions';

class DetailPicture extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getAlbumsDetails(this.props.route.params.catID, this.props.route.params.albumID));
  }

  renderPicture = (value) => {
    //console.log(value);
    return(
        value.data ? value.data.map((item, i) => (
            <TouchableOpacity
                key={i}
            >
                <View style={styles.cardContainer}>
                    <View>
                        <Image 
                            style={{height:180, justifyContent:'space-around'}}
                            source={{uri:`${item.url}`}}
                            resizeMode='cover'
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )): null
    )
  }
  
  render() {
    return (
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        {this.renderPicture(this.props.DetailPic)}
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
        DetailPic: state.DetailPic
    }
}

export default connect(mapStateToProps)(DetailPicture);

