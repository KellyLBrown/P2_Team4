import React, {useState} from 'react';
import {fetchRecipes} from '../actions/actions';

export default function NutritionInfo(props) {
    const [food, setFood] = useState(null);
    const [calories, setCalories] = useState(0);

    const getRecipe = async () => {
        /* let recipes =  */await fetchRecipes('asparagus');
        //console.log(recipes);
        //setFood(recipes.parsed[0].food.label);
    }

    const getCalories = async () => {
        //let recipes = await fetchRecipes('asparagus');
        //console.log(recipes);
        //setCalories(recipes.parsed[0].food.nutrients.ENERC_KCAL);
    }

    //getRecipe();
    //getCalories();
    console.log(food);

    if (!food) {
        return (
            <aside>
                <p id="warnMessage">No such food exists or the food cannot be retrieved from the database!</p>
            </aside>
        )
    }
    else {
        return (
            <aside id="nutrition-info">
                <h4>Nutrition Facts for {food}: </h4>
                <p>Calories: {calories}</p>
            </aside>
        )
    }
}