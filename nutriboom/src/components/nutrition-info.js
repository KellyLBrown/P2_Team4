import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {getFoodByName} from '../actions/actions';

export default function NutritionInfo(props) {
    const [food, setFood] = useState(null);
    const [calories, setCalories] = useState(0);
    let recipes = useSelector(store => store.food);

    const getFood = async () => {
        console.log(await getFoodByName('asparagus'));
        console.log(recipes.foodItem.name);
        setFood(recipes.foodItem.name);
    }

    const getCalories = async () => {
        //let recipes = await fetchRecipes('asparagus');
        //console.log(recipes);
        //setCalories(recipes.parsed[0].food.nutrients.ENERC_KCAL);
    }

    getFood();
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