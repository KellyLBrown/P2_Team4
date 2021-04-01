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
        console.log(name);
        if (currentFood.foodItems.data != undefined) {
            console.log(currentFood.foodItems.data);
            if (currentFood.foodItems.data.hints[0] != undefined) {
                setFood(currentFood.foodItems.data.hints[0].food.label);
                setCalories(currentFood.foodItems.data.parsed[0].food.nutrients.ENERC_KCAL);
                setFat(currentFood.foodItems.data.parsed[0].food.nutrients.FAT);
                setCholesterol(currentFood.foodItems.data.parsed[0].food.nutrients.CHOCDF);
                setProtein(currentFood.foodItems.data.parsed[0].food.nutrients.PROCNT);
                setFiber(currentFood.foodItems.data.parsed[0].food.nutrients.FIBTG);
            }
        }
        await getCurrentFood(store.dispatch);
    }

    useEffect(async (name)  => {
        console.log(name);
        await getFood(name);
    }, []);

    const handleChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
        console.log(name);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await getFood(name);
    }
    console.log(food);

    if (!food) {
        return (
            <aside>
                <SearchBar name="Food" handleChange={handleChange} onSubmit={onSubmit} />
            </aside>
        )
    }
    else {
        return ( 
            <aside id="nutrition-info">
                <SearchBar name="Food" handleChange={handleChange} onSubmit={onSubmit} />
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