import { GET_ALBUMS } from "../../types";

import axios from 'axios';

import { FIREBASEURL } from '../../../utils/misc';

export function getAlbums(catID) {

    const request = axios({
        method:'GET',
        url:`${FIREBASEURL}/pictures/${catID}/-PIC_ALBUMS.json`
    }).then(response => {
        const albums = [];
        for(let key in response.data) {
            albums.push({
                ...response.data[key],
                id: key
            })
        }
        //console.log(albums);
        return albums;
    }).catch(e => {
        return false;
    })

    return {
        type: GET_ALBUMS,
        payload: request
    }
}