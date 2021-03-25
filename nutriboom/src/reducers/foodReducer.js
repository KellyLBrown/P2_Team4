import {FETCH_FOOD, GET_FOOD_BY_ID} from "../actions/types";

const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_FOOD: 
        return {
            ...state,
            items:action.payload
        }
        case GET_FOOD_BY_ID:
        return {
            ...state,
            item:action.payload
        }
        default:
            return state;
    }
}