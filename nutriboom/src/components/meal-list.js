import React, {useState} from 'react';
import {fetchRecipes} from '../actions/postactions';
import Meal from './meal';

export default function MealList(props) {
    let recipes = fetchRecipes();
    console.log(recipes);

    if (!recipes.length) {
        return (
            <p id="warnMessage">You don't have any recipes! Create some to build your list!</p>
        )
    }
    else {
        const jsxRecipes = [];
        for (let r of recipes) {
            jsxRecipes.push(
                <Meal id={r.id} title={r.title} recipe={r.recipe} /> 
            )
        }
        return (
            <ul>
                {jsxRecipes}
            </ul>
        )
    }
}