import {FETCH_RECIPES, AUTH_LOGIN, AUTH_LOGOUT, FETCH_FOOD, NEW_RECIPE, NEW_USER} from './types';
import {recipeapi} from '../apis/endpoints';

export const fetchRecipes = async (name) => {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    // let temp = [
    //         {
    //             "id" : 0,
    //             "name":"meal1",
    //             "ingredients":"cabbage"
                    
    //                 // "beat": {
    //                 //     "cal": 1,
    //                 //     "sug": 1,
    //                 //     "fiber": 1
    //                 // }
    //         }
        
    //     ]
    try {
      console.log(name);
      const APP_ID = "7ad6b381";
      const APP_KEY = "5ae08933f60c2e327d2f0790371bd56e";
      let query = name;
      let temp = await recipeapi.get(`/parser?ingr=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      return temp.data;
    } catch (e) {
      console.log(e);
    }
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
}

export function getFoodById(id) {
  let foodList = fetchFood();
  for (let food of foodList) {
    console.log(food.id);
    if (food.id == id) {
      return food;
    }
  }
  return foodList;
}

// User Actions
// const userLogin = username => ({
//     type: AUTH_LOGIN,
//     username,
//   });

// const fakeLoginRequest = username =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       username === "testuser" ? resolve(username) : reject("No such user");
//     }, 1000),
//   );

export const fetchUser = async () => {
  let user = {
    username: "username",
    password: "testpass",
    firstname: "testfirst",
    lastname: "testlast",
    email: "test@example.com"
  }
  return user;
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
