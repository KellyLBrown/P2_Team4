import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {getFoodByName} from '../actions/actions';
import Meal from './meal';
import {store} from '../store';
import {fetchRecipes} from '../actions/actions'

export default function MealList(props) {
    const [food, setFood] = useState([]);
    const [calories, setCalories] = useState(0);
    let currentFood = useSelector(store => store.food);
    //console.log(currentFood);

    useEffect( () => {
        getRecipes();
    })

    const getRecipes = async () => {
        let foodList = await fetchRecipes(11);
        //setFood({[foodList]});
        console.log(foodList);
    }

    //getFood();
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