import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {getFoodByName} from '../actions/actions';
import Meal from './meal';
import {store} from '../store';

export default function MealList(props) {
    const [food, setFood] = useState("empty");
    const [calories, setCalories] = useState(0);
    let currentFood = useSelector(store => store.food);
    //console.log(currentFood);

    const getFood = async () => {
        console.log(await getFoodByName('asparagus'));
        setFood(currentFood.foodItem.name);
        setCalories(currentFood.foodItem.calories);
        console.log(food);
    }

    getFood();
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
            <Meal id={"1"} name={food} calories={calories} ingredients={"stuff"} /> 
            )
    //}

    // return (
    //     <Meal id={""} name={recipes.result} ingredients={""} />
    // )
}