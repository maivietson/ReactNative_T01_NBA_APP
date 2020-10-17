import { GET_VIDEO } from '../../types';

import axios from 'axios'

import { FIREBASEURL } from '../../../utils/misc'

export function getVideos(catID) {
    const request = axios({
        method:'GET',
        url:`${FIREBASEURL}/pictures/${catID}/`
    })
}