import { combineReducers } from 'redux';
import User from './user_rducer/user_reducer';
import Pic from './pictures_rducer/picture_reducer';
import Album from './pictures_rducer/album_reducer'
import DetailPic from './pictures_rducer/detail_reducer';

const rootReducer = combineReducers({
    User,
    Pic,
    Album,
    DetailPic
});

export default rootReducer;