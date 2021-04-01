import {FETCH_RECIPES, FETCH_RECIPE, AUTH_LOGIN, AUTH_LOGOUT, FETCH_FOOD, NEW_RECIPE, NEW_USER} from './types';
import {foodapi, recipeapi} from '../apis/endpoints';
import axios from 'axios';
import { store } from '../store';

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

export function fetchRecipe(author, description, name, preptime) {
  // This is the middleware that allows us to call the dispatch function directly and make async requests.
  return function(dispatch) {
    console.log(name);
    let recipe = axios({
      method: 'post',
      url: `http://localhost:8080/recipe/get`,
      data: {
        name : name
      }
    }).then(data => dispatch({
      type: FETCH_RECIPE,
      recipe : data,
    })).catch(console.log("Promise rejected! Panic!"));
   
    console.log(recipe);
    return recipe.data;
  }
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

export const fetchUser = async (username, password) => {
  return function(dispatch) {
    let user = axios({
      method: 'post',
      url: 'http://localhost:8080/user/login',
      data: {
        username: username,
        password: password
      }
    }).then(data => dispatch({
      type: AUTH_LOGIN,
      currentUser: data
    })).catch(console.log("Promise rejected! Panic!"));

    console.log(user);
    return user.data;
  }
  
  // console.log(user);
  // console.log(user.data);

  // let action = {
  //   type: AUTH_LOGIN,
  //   currentUser: user.then(res => res.data)
  // }

  // return function(dispatch) {
  //   user.then(dispatch(action));
  // }

}

export const logOut = () => {
  return {
    type: AUTH_LOGOUT
  }
}


export function createRecipe(recipeData) {
    return function(dispatch) {
        // TODO create recipe
    }
} 

export function registerUser(username, password, firstname, lastname, email) {
    return function(dispatch) {

      let user = axios({
        method: 'post',
        url: 'http://localhost:8080/user/register',
        data:  {
          username: username,
          password: password,
          firstname: firstname,
          lastname: lastname,
          email: email
        }
        
      }).then(data => dispatch({
        type: NEW_USER

      })).catch(console.log("Promise rejected! Panic!"));
  
      console.log(user);
      return user.data;
    }
}

const handleError = (e) => {
    console.log(e);
}
