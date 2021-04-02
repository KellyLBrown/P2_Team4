import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import {fetchRecipes, getFoodByName} from '../actions/actions';
import Meal from './meal';

let jsxRecipes = [];
export default function MealList(props) {
    let date;

    if (props.date != undefined) {
        date = props.date;
    } else {
        date = null;
    }

    let currentFood = useSelector(state => state.recipes);
    let currentUser = useSelector(state => state.user);
    let recipeList = [];
    const [noname, setNoName] = useState(false);    // I don't know what to call this variable yet...
    console.log(currentFood.data);

    const dispatch = useDispatch();

    const getRecipesByDate = async () => {
        let recipes = await fetchRecipes();
        recipeList = await recipes(dispatch);
        console.log(recipeList);

        for (let r of recipeList.payload.data) {
            if (r.date == date) {
                jsxRecipes.push(<li>{r.name}</li>);
            }
        }
        console.log(jsxRecipes);
    }

    const scheduleRecipe = () => {
        
    }

    const renderAddRecipe = async (e) => {
        console.log(currentUser.currentUser.data.id);
        let getAllRecipes = await fetchRecipes(currentUser.currentUser.data.id);
        recipeList = await getAllRecipes(dispatch);
        console.log(recipeList);

        for (let r of recipeList.payload.data) {
            jsxRecipes.push(<li key={r.rId}>{r.name} <button onClick={() => {}}>+</button></li>)
        }
        console.log(jsxRecipes);
        // return (
        //     <Redirect to="./calendar" />
        // )
    }

    if (noname) {
        return (
            <div id="meal-list">
                <ul>{jsxRecipes}</ul>
                <button onClick={renderAddRecipe}>Add Recipe</button>
            </div>
        )
    } else {
        return (
            <div id="meal-list">
                <ul>{jsxRecipes}</ul>
                <button onClick={renderAddRecipe}>Add Recipe</button>
            </div>
        )
    }
}