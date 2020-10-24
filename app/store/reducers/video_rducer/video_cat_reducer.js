import { GET_CAT_VIDEO } from '../../types';

export default function(state={}, action) {
    switch(action.type) {
        case GET_CAT_VIDEO:
            return {...state, data: action.payload}
        default:
            return state;
    }
}