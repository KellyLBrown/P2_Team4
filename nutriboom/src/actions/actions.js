import {FETCH_RECIPES, AUTH_LOGIN, AUTH_LOGOUT, FETCH_FOOD, NEW_RECIPE, NEW_USER} from './types';

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
    let foodList = [
    {
      "id" : 0,
      "name" : "apple",
      "calories" : "50"
    },
    {
      "id": 1,
      "name":"strawberry",
      "calories":"30"
    },
    {
      "id": 2,
      "name":"Pizza",
      "calories":"300"
    }
  ]
  return foodList;
    // return function(dispatch) {
    //     // TODO fetch food
    // }
}

export function getFoodById(id) {
  let foodList = fetchFood();
  for (let food of foodList) {
    console.log(food.id);
    if (food.id == id) {
      return food;
    }
  }
  return id;
}

// User Actions
const userLogin = username => ({
    type: AUTH_LOGIN,
    username,
  });

const fakeLoginRequest = username =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      username === "testuser" ? resolve(username) : reject("No such user");
    }, 1000),
  );

export const fetchUser = username => async dispatch => {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    //dispatch(incrementProgress());
    try {
      const userResponse = await fakeLoginRequest(username);
      dispatch(userLogin(userResponse));
      // if successfull return the username
      console.log(username);
      return userResponse;
    } catch (error) {
      handleError(error);
    }
}
// End User Actions

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

const handleError = (e) => {
    console.log(e);
}