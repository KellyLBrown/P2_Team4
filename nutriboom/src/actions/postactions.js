import {FETCH_RECIPES, FETCH_USER, FETCH_FOOD, NEW_RECIPE, NEW_USER} from './types/types';

export function fetchRecipes() {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    // return function(dispatch) {
    //     // TODO fetch recipes
    // }
    let temp = [
            {
                "id" : 0,
                "name":"meal1",
                "ingredients":"cabbage"
                    
                    // "beat": {
                    //     "cal": 1,
                    //     "sug": 1,
                    //     "fiber": 1
                    // }
            }
        
        ]
    return temp;
}   

export function fetchFood() {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    return function(dispatch) {
        // TODO fetch food
    }
}

export function fetchUser() {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    let user = {
        username:"testuser",
        password:"p4ssw0rd"
    }
    return user;
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