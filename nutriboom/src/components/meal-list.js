import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import {fetchRecipes, getFoodByName} from '../actions/actions';


export default function MealList(props) {
    let date = props.date;

    let jsxRecipes = props.jsxRecipes;
    //console.log(jsxRecipes);

    let currentFood = useSelector(state => state.recipes);
    let currentUser = useSelector(state => state.user);
    let recipeList = [];
    const [noname, setNoName] = useState(false);    // I don't know what to call this variable yet...
    let image = props.image;

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(recipeList);
    }, [recipeList])

    const renderAddRecipe = async (e) => {
        console.log(currentUser.currentUser.data.id);
        let getAllRecipes = await fetchRecipes(currentUser.currentUser.data.id);
        recipeList = await getAllRecipes(dispatch);
    }

    if (!date) {
        return (
            <div id="meal-list">
                <ul>{jsxRecipes}</ul>
            </div>
        )
    }
    return (
        <div id="meal-list">
            <ul>{jsxRecipes}</ul>
            <button onClick={renderAddRecipe}>Add Recipe</button>
        </div>
    )
    
}
