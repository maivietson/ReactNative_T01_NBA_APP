import { combineReducers } from 'redux';
import User from './user_rducer/user_reducer';
import Pic from './pictures_rducer/picture_reducer';
import Album from './pictures_rducer/album_reducer'
import DetailPic from './pictures_rducer/detail_reducer';
import VideoCats from './video_rducer/video_cat_reducer';
import ListVideos from './video_rducer/video_list_reducer';

const rootReducer = combineReducers({
    User,
    Pic,
    Album,
    DetailPic,
    VideoCats,
    ListVideos
});

export default rootReducer;