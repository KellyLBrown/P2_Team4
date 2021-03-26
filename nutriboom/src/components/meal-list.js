import React, {useState} from 'react';
import {fetchRecipes} from '../actions/actions';
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
        // const jsxRecipes = [];
        // let index = 0;
        // // for (let r of recipes) {
        //     jsxRecipes.push( 
        //         <Meal id={"1"} name={recipes[0].food} ingredients={"stuff"} /> 
        //     )
        // //}
        return (
            <ul>
                {recipes.map(food => {
                    <Meal id={food.food.foodId} name={food.food.label} ingredients={food.food.nutrients} />
                })}
            </ul>
        )
    }

    // return (
    //     <Meal id={""} name={recipes.result} ingredients={""} />
    // )
}