import { GET_LIST_VIDEO } from "../../types";

import axios from 'axios';

import { FIREBASEURL } from '../../../utils/misc';

export function getListVideos(catID) {

    const request = axios({
        method: 'GET',
        url:`${FIREBASEURL}/videos/${catID}.json`
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
        type: GET_LIST_VIDEO,
        payload: request
    }
}