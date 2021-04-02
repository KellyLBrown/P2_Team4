import {GET_RECIPES_FROM_DATE, FETCH_RECIPES, FETCH_RECIPE, AUTH_LOGIN, AUTH_LOGOUT, FETCH_FOOD, NEW_RECIPE, NEW_USER} from './types';
import {foodapi, recipeapi} from '../apis/endpoints';
import axios from 'axios';
import { store } from '../store';

export const getFoodByName = async (name) => {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    try {
      console.log(name);
      const APP_ID = "7ad6b381";
      const APP_KEY = "5ae08933f60c2e327d2f0790371bd56e";
      
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
export function fetchRecipes(aId) {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
  //   let foodList = [
  //   {
  //     "id" : 0,
  //     "name" : "apple",
  //     "calories" : "50"
  //   },
  //   {
  //     "id": 1,
  //     "name":"strawberry",
  //     "calories":"30"
  //   },
  //   {
  //     "id": 2,
  //     "name":"Pizza",
  //     "calories":"300"
  //   }
  // ]
  // return foodList;
  return function(dispatch) {
    console.log(aId);
    let recipes = recipeapi.post("/recipe/getrecipes", {aId: aId}).then(data => dispatch({
      type: FETCH_RECIPES,
      payload: data
    }));

    console.log(recipes);
    return recipes;
  }
}

export function getRecipesFromDate(date) {
  return function(dispatch) {
    console.log(date);
    let recipes = recipeapi.post("", {date: date}).then(data => dispatch({
      type: GET_RECIPES_FROM_DATE,
      payload: data
    }));

    console.log(recipes);
    return recipes;
  }
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
}

export const logOut = () => {
  return {
    type: AUTH_LOGOUT
  }
}

export function createRecipe(name, author, time, description, ingredients, dates) {
    console.log(author);
    return function(dispatch) {
      let recipe = recipeapi.post(
        "/recipe/log", {
          name: name,
          author: author,
          time: time.toString(),
          description: description,
          ingredients: ingredients,
          dates: dates
        }).then(data => dispatch({
          type: NEW_RECIPE,
          payload: data
        })).catch(console.log("No new recipe! Panic!"));

        

      return recipe.data;
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
