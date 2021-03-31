import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {fetchRecipes, getFoodByName} from '../actions/actions';
import Meal from './meal';
import {store} from '../store';

export default function MealList(props) {
    const [recipe, setRecipe] = useState("empty");
    const [calories, setCalories] = useState(0);
    let currentFood = useSelector(store => store.recipes);
    console.log(currentFood);

    const getRecipes = async () => {
        let recipes = await fetchRecipes();
        //  TODO dispatch inner function if necessary
        // setFood(currentFood.foodItem.name);
        // setCalories(currentFood.foodItem.calories);
        //console.log(food);
    }

    getRecipes();
    return (
        <div>

        </div>
    )
}