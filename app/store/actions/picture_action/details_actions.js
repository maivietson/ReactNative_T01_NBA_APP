import { GET_ALBUMS_DETAIL } from "../../types";

import axios from 'axios';

import { FIREBASEURL } from '../../../utils/misc';

export function getAlbumsDetails(catID, albumID) {

    const request = axios({
        method:'GET',
        url:`${FIREBASEURL}/pictures/${catID}/-PIC_ALBUM_DETAILS/${albumID}.json`
    }).then(response => {
        const images = [];
        for(let key in response.data) {
            images.push(response.data[key])
        }
        console.log(images);
        return images;
    }).catch(e => {
        return false;
    })

    return {
        type: GET_ALBUMS_DETAIL,
        payload: request
    }
}