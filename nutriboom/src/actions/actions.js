import {GET_IMAGE, FETCH_RECIPES, FETCH_RECIPE, AUTH_LOGIN, AUTH_LOGOUT, FETCH_FOOD, NEW_RECIPE, NEW_USER, LOGIN_FAILED} from './types';
import {foodapi, recipeapi} from '../apis/endpoints';
import axios from 'axios';
import { store } from '../store';

export const getFoodByName = (name) => {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    try {
      // console.log(name);
      const APP_ID = "7ad6b381";
      const APP_KEY = "5ae08933f60c2e327d2f0790371bd56e";
      
      return function(dispatch) {
        console.log(name);
        foodapi.get(`/parser?ingr=${name}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(data => dispatch({
          type: FETCH_FOOD,
          payload: data
        }));
      }
    } catch (error) {
      console.log(error);
    }
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
    })).catch(() => dispatch({ type: LOGIN_FAILED })        
    );
    
    
  }
}

// This and the fetchFood() method have been swapped in order for the code to make more sense.
export function fetchRecipes(aId) {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
  return function(dispatch) {
    console.log(aId);
    let recipes = recipeapi.post("/calendar/getCalendar", {uId: aId}).then(data => dispatch({
      type: FETCH_RECIPES,
      payload: data
    }));

    console.log(recipes);
    return recipes;
  }
}

export function getImage(name) {
  console.log(name);
  return function(dispatch) {
    let image = recipeapi.get(`/image/get/${name}`).then(data => dispatch({
      type: GET_IMAGE,
      payload: data
    }))
    console.log(image);
    return image;
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

export const logOut = () => {
  return {
    type: AUTH_LOGOUT
  }
}

export function createRecipe(name, author, time, description, ingredients) {
    //console.log(ingredients);
    return function(dispatch) {
      let recipe = recipeapi.post(
        "/recipe/log", {
          name: name,
          author: author,
          time: time,
          description: description,
          ilist: ingredients,
        }).then(data => dispatch({
          type: NEW_RECIPE,
          payload: data
        })).catch(console.log("No new recipe! Panic!"));
        console.log(time);
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
