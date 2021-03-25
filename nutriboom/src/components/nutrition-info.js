import React, {useState} from 'react';
import { getFoodById } from '../actions/actions';
import fetchFood from '../reducers/index';

export default function NutritionInfo(props) {
    let food = getFoodById(1);
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
                <h4>Nutrition Facts for {food.name}: </h4>
                <p>Calories: {food.calories}</p>
            </aside>
        )
    }
}