import { GET_ALBUMS_DETAIL } from "../../types";

export default function(state={}, action) {
    switch(action.type) {
        case GET_ALBUMS_DETAIL:
            return {...state, data: action.payload}
        default:
            return state;
    }
}