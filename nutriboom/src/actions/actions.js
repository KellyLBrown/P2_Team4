import {FETCH_RECIPES, AUTH_LOGIN, AUTH_LOGOUT, FETCH_FOOD, NEW_RECIPE, NEW_USER} from './types';
import {foodapi, recipeapi} from '../apis/endpoints';

export const getFoodByName = async (name) => {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    try {
      console.log(name);
      const APP_ID = "7ad6b381";
      const APP_KEY = "5ae08933f60c2e327d2f0790371bd56e";
      //let temp = await foodapi.get(`/parser?ingr=${name}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      
      // return {
      //   type: FETCH_RECIPES,
      //   payload: temp.data
      // }
      return function(dispatch) {
        console.log("In dispatch");
        foodapi.get(`/parser?ingr=${name}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(data => dispatch({
          type: FETCH_FOOD,
          payload: data
        }));
      }
    } catch (error) {
      console.log(error);
    }
}   

// This and the fetchFood() method have been swapped in order for the code to make more sense.
export function fetchRecipes() {
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
  // for (let food of foodList) {
  //   console.log(food.id);
  //   if (food.id == id) {
  //     return food;
  //   }
  // }
  // return foodList;
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

export const fetchUser = () => {
  let user = {
    username: "username",
    password: "testpass",
    firstname: "testfirst",
    lastname: "testlast",
    email: "test@example.com"
  }
  // return function(dispatch) {
  //   new Promise((resolve, reject) => {
  //     user.username == 'username' && user.password == 'testpass' ? resolve(user) : reject("No such user")
  //   }).then(data => dispatch({
  //     type: AUTH_LOGIN,
  //     currentUser: data
  //   }))
  // }
  return {
    type: AUTH_LOGIN,
    currentUser: user
  }
}

export const logOut = () => {
  return {
    type: AUTH_LOGOUT
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
