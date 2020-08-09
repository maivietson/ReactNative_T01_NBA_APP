import { GET_ALBUMS } from "../../types";

export default function(state={}, action) {
    switch(action.type) {
        case GET_ALBUMS:
            return {...state, data: action.payload}
        default:
            return state;
    }
}