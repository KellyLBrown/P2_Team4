import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {getFoodByName} from '../actions/actions';
import {store} from '../store';
import SearchBar from './search-bar';

export default function NutritionInfo(props) {
    const [name, setName] = useState("");
    const [food, setFood] = useState(null);
    const [calories, setCalories] = useState(0);
    const [fat, setFat] = useState(0.0);
    const [cholesterol, setCholesterol] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fiber, setFiber] = useState(0);
    let currentFood = useSelector(state => state.food);

    const getFood = async (name) => {
        let getCurrentFood = await getFoodByName(name);
        await getCurrentFood(store.dispatch);
        console.log(currentFood.foodItems);
        if (currentFood.foodItems.data != undefined) {
            if (currentFood.foodItems.data.hints[0] != undefined) {
                setFood(currentFood.foodItems.data.hints[0].food.label);
                setCalories(currentFood.foodItems.data.parsed[0].food.nutrients.ENERC_KCAL);
                setFat(currentFood.foodItems.data.parsed[0].food.nutrients.FAT);
                setCholesterol(currentFood.foodItems.data.parsed[0].food.nutrients.CHOCDF);
                setProtein(currentFood.foodItems.data.parsed[0].food.nutrients.PROCNT);
                setFiber(currentFood.foodItems.data.parsed[0].food.nutrients.FIBTG);
            }
        }
    }

    useEffect((name)  => {
        console.log(name);
        getFood(name);
    }, []);

    const onChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        getFood(name);
    }

    console.log(food);

    if (!food) {
        return (
            <aside>
                <SearchBar name="Food" onChange={onChange} onSubmit={onSubmit} />
            </aside>
        )
    }
    else {
        return ( 
            <aside id="nutrition-info">
                <SearchBar name="Food" onChange={onChange} onSubmit={onSubmit} />
                <h4>Nutrition Facts for {food}: </h4>
                <p>Calories: {calories}</p>
                <p>Total Fat: {fat}g</p>
                <p>Cholesterol: {cholesterol}g</p>
                <p>Fiber: {fiber}g</p>
                <p>Protein: {protein}g</p>
            </aside>
        )
    }
}