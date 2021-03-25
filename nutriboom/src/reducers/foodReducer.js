import {FETCH_FOOD} from "../actions/types";

const initialState = {
    items: []
}

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_FOOD: 
        return {
            ...state,
            itemS:action.payload
        }
        default:
            return state;
    }
}