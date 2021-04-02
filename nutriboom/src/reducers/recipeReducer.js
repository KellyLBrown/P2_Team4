import {FETCH_RECIPES, FETCH_RECIPE, NEW_RECIPE, GET_RECIPES_FROM_DATE} from '../actions/types';

const initialState = {
    recipes: [],
    newrecipe: {
        title: '',
        date: undefined,
        steps: []
    },
    fetchedrecipe: {
        author: '',
        description: '',
        name: '',
        time: undefined
    },
    fetchedrecipes: {
        author: '',
        description: '',
        name: '',
        time: undefined
    }
}

export default function(state=initialState, action) {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_RECIPES: 
        return {
            ...state,
            fetchedrecipes:action.recipe
        }
        case GET_RECIPES_FROM_DATE:
        return {
            ...state,
            recipes:action.payload
        }
        case FETCH_RECIPE: 
        return {
            ...state,
            fetchedrecipe:action.recipe
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