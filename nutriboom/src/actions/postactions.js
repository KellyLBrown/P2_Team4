import {FETCH_RECIPES, FETCH_USER, FETCH_FOOD, NEW_RECIPE, NEW_USER} from './types/types';

export function fetchRecipes() {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    return function(dispatch) {
        // TODO fetch recipes
    }
}

export function fetchFood() {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    return function(dispatch) {
        // TODO fetch food
    }
}

export function fetchUser() {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    return function(dispatch) {
        // TODO fetch user
    }
}

export function createRecipe(recipeData) {
    return function(dispatch) {
        // TODO create recipe
    }
} 

export function registerUser(userData) {
    return function(dispatch) {
        // TODO register new user
    }
} 