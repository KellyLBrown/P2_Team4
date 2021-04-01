import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormInput from './form-input';
import SearchBar from './search-bar';
import {getFoodByName} from '../actions/actions'; 

let ingredients = [];
let jsxIngredients = [];
export default function RecipeBuilder(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [search, setSearch] = useState(false);
    const [warn, setWarn] = useState(false);
    let [ingredient, setIngredient] = useState({measurement: 0, unit: "", Ingredient: ""});
    let currentFood = useSelector(state => state.food);

    useEffect(() => {

    }, []);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
    }

    const getFood = async (name) => {
        let getCurrentFood = await getFoodByName(name);
        console.log(name);
        if (currentFood.foodItems.data != undefined) {
            console.log(currentFood.foodItems.data);
            if (currentFood.foodItems.data.hints[0] != undefined) {
                setIngredient({measurement: ingredient.measurement, unit: ingredient.unit, Ingredient: currentFood.foodItems.data.hints[0].food.label});
            }
        }
        getCurrentFood(dispatch);
    }

    const searchIngredient = (e) => {
        e.preventDefault();
        console.log(e);
        getFood(ingredient.Ingredient);
    }

    const handleChange = (e) => {
        if (e.target.name == "Name") {
            setName(e.target.value);
            console.log(name);
        } else if (e.target.name == "Description") {
            setDescription(e.target.value);
            console.log(description);
        } else if (e.target.name == "measurement") {
            setIngredient({measurement: e.target.value, unit: ingredient.unit, Ingredient: ingredient.Ingredient});
            console.log(ingredient);
        } else if (e.target.name == "unit") {
            setIngredient({measurement: ingredient.measurement, unit: e.target.value, Ingredient: ingredient.Ingredient});
            console.log(ingredient);
        } else if (e.target.name == "Ingredient") {
            setIngredient({measurement: ingredient.measurement, unit: ingredient.unit, Ingredient: e.target.value});
            console.log(ingredient);
        } else if (e.target.name == "search") {
            setSearch(e.target.value == "Search Ingredients");
            console.log("Radio Button Value has changed");
        }
        console.log(jsxIngredients);
    }

    const addIngredient = (e) => {
        e.preventDefault();
        ingredients.push(ingredient);
        jsxIngredients.push(<li>{ingredient.measurement} {ingredient.unit} {ingredient.Ingredient}</li>);
    }

    if (search && ingredients.length > 0) {
        console.log("Search is true and ingredients are populated");
        return (
            <div id="recipe-builder">
               <form onSubmit={handleSubmit}>
                    <FormInput type="text" name="Name" handleChange={handleChange} />
                    <FormInput type="textarea" name="Description" handleChange={handleChange} />
                    <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                    <SearchBar name="Ingredient" isForm={false} onSubmit={searchIngredient}/>
                    <h4>Current Ingredients: </h4>
                    <ul id="ingredient-list">{jsxIngredients}</ul> 
                    <input type="submit" value="Create Recipe" />
                </form>
            </div>
        )
    }
    else if (ingredients.length > 0) {
        return (
            <div id="recipe-builder">
                <form onSubmit={handleSubmit}>
                    <FormInput type="text" name="Name" handleChange={handleChange} />
                    <FormInput type="textarea" name="Description" handleChange={handleChange} />
                    <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                    <FormInput type="ingredient" name="Ingredient" handleChange={handleChange} />
                    <button onClick={addIngredient}>Add</button>
                    <h4>Current Ingredients: </h4>
                    <ul id="ingredient-list">{jsxIngredients}</ul> 
                    <input type="submit" value="Create Recipe" />
                </form>
            </div>
        )
    }
    else if (search) {
        console.log("Search is true");
        return (
            <div id="recipe-builder">
               <form onSubmit={handleSubmit}>
                    <FormInput type="text" name="Name" handleChange={handleChange} />
                    <FormInput type="textarea" name="Description" handleChange={handleChange} />
                    <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange}/>
                    <SearchBar name="Ingredient" isForm={false} onSubmit={searchIngredient}/>
                    <input type="submit" value="Create Recipe" />
                </form>
            </div>
        )
    }
    else {
        return (
            <div id="recipe-builder">
                <form onSubmit={handleSubmit}>
                    <FormInput type="text" name="Name" handleChange={handleChange} />
                    <FormInput type="textarea" name="Description" handleChange={handleChange} />
                    <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                    <FormInput type="ingredient" name="Ingredient" handleChange={handleChange} />
                    <button onClick={addIngredient}>Add</button>
                    <input type="submit" value="Create Recipe" />
                </form>
            </div>
        )
    }
}