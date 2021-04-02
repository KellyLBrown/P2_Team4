import {combineReducers} from 'redux';
import recipeReducer from './recipeReducer';
import userReducer from './userReducer';
import foodReducer from './foodReducer';

export default combineReducers({
    recipes: recipeReducer,
    recipe: recipeReducer,
    user: userReducer,
    food: foodReducer
}) 