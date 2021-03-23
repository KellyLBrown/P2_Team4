import {FETCH_POSTS, NEW_POST} from '../actions/types/types';

// TOOD change posts to constants we need for the program
const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_POSTS: 
        return {
            ...state,
            items:action.payload
        }
        case NEW_POST: 
        return {
            ...state,
            item: action.payload
        }
        default:
            return state;
    }
}