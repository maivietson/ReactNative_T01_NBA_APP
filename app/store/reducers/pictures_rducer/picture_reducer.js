import { GET_PIC } from "../../types";

export default function(state={}, action) {
    switch(action.type) {
        case GET_PIC:
            return {...state, data: action.payload}
        default:
            return state;
    }
}