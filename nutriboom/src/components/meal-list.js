import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {fetchRecipes} from '../actions/actions';
import Meal from './meal';

export default function MealList(props) {
    const [recipe, setRecipe] = useState("empty");
    const [calories, setCalories] = useState(0);
    let recipes = useSelector(store => store.recipes);
    console.log(recipes);

    const getRecipe = async () => {
        await fetchRecipes('asparagus');
        console.log(recipes);
        setRecipe(recipes.recipe);
    }

    getRecipe();
    // if (!recipes.length) {
    //     return (
    //         <p id="warnMessage">You don't have any recipes! Create some to build your list!</p>
    //     )
    // }
    //else {
        // const jsxRecipes = [];
        // let index = 0;
        // for (let r of recipes) {
        //     jsxRecipes.push( 
        //     )
        //}
        return (
            // <ul>
            //     {recipes.map(food => {
            //         // console.log(food);
            //         <Meal id={food.food.foodId.toString()} name={food.food.label.toString()} ingredients={food.food.nutrients.toString()} />
            //     })}
            // </ul>
            <Meal id={"1"} name={recipe} ingredients={"stuff"} /> 
            )
    //}

    // return (
    //     <Meal id={""} name={recipes.result} ingredients={""} />
    // )
}