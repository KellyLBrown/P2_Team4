import {FETCH_USER, NEW_USER} from "../actions/types/types";

const initialState = {
    item: {},
    regItem: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_USER: 
        return {
            ...state,
            item:action.payload
        }
        case NEW_USER: 
        return {
            ...state,
            regItem:action.payload
        }
        default:
            return state;
    }
}
