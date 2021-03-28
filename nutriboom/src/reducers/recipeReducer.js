import {FETCH_RECIPES, NEW_RECIPE} from '../actions/types';

const initialState = {
    recipes: [],
    recipe: {
        title: '',
        date: undefined,
        steps: []
    }
}

export default function(state=initialState, action) {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_RECIPES: 
        return {
            ...state,
            recipes:action.payload
        }
        case NEW_RECIPE: 
        return {
            ...state,
            recipe: action.payload
        }
        default:
            return state;
    }
}