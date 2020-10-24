import { GET_CAT_VIDEO } from '../../types';

import axios from 'axios'

import { FIREBASEURL } from '../../../utils/misc'

export function getCategoryVideos(catID) {
    const request = axios({
        method:'GET',
        url:`${FIREBASEURL}/videos/videos_cat.json`
    }).then( response => {
        const videos = [];
        for(let key in response.data) {
            videos.push({
                ...response.data[key],
                id: key
            });
        }

        return videos;
    }).catch(e => {
        return false;
    })

    return {
        type: GET_CAT_VIDEO,
        payload: request
    }
}