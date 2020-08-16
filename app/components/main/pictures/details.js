import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';

import { connect } from 'react-redux';
import { getAlbumsDetails } from '../../../store/actions/picture_action/details_actions';

import ImageHeader from '../../../galleryImage/components/ImageHeader';
import ImageFooter from '../../../galleryImage/components/ImageFooter';
import ImageGallery from '../../../galleryImage/components/ImageGallery';

// import ImageView from 'react-native-image-viewing';

class DetailPicture extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    currentImageIndex: 0,
    images: [],
    isVisible: false
  }

  componentDidMount() {
    this.props.dispatch(getAlbumsDetails(this.props.route.params.catID, this.props.route.params.albumID));
  }

  onSelect = (images, index) => {
    this.setState({
      currentImageIndex: index,
      images: images,
      isVisible: true
    })
  }

  onRequestClose = () => {
    this.setState({
      isVisible: false
    })
  }

  renderPicture = (value) => {
    //console.log(value.data);
    const imagesResource = [];
    if(value.data) {
      const imageLength = value.data.length;
      //console.log(imageLength);
      value.data.map((item, i) => {
        imagesResource.push({
          uri: `${item.url}`
        })
      })
      return (
        <SafeAreaView style={styles.root}>
          <ImageGallery 
            imagesResource={imagesResource}
            onPress={(index) => this.onSelect(imagesResource, index)}
          />
          {/* <ImageView 
            images={imagesResource}
            imageIndex={this.state.currentImageIndex}
            presentationStyle="overFullScreen"
            visible={this.state.isVisible}
            onRequestClose={this.onRequestClose}
            HeaderComponent={undefined}
            FooterComponent={({imageIndex}) => (
              <ImageFooter imageIndex={imageIndex} imagesCount={imagesResource.length} />
            )}
          /> */}
        </SafeAreaView>
      )
    }

    return null;
  }
  
  render() {
    return (
        this.renderPicture(this.props.DetailPic)
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
    ...Platform.select({
      android: { paddingTop: 0 },
      default: null,
    }),
  },
})

function mapStateToProps(state) {
    //console.log(state)
    return {
        DetailPic: state.DetailPic
    }
}

export default connect(mapStateToProps)(DetailPicture);

