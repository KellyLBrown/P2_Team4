import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormInput from './form-input';
import SearchBar from './search-bar';

import {getFoodByName, createRecipe} from '../actions/actions'; 

let ingredients = [];
let dates = [];
//let jsxIngredients = [];
export default function RecipeBuilder(props) {
    const [name, setName] = useState("");
    let author = useSelector(state => state.user.currentUser);

    const [description, setDescription] = useState("");
    const [time, setTime] = useState(0);   // Signifies the date and time the recipe was created.
    const [search, setSearch] = useState(true);
    const [jsxIngredients, setJsxIngredients] = useState([]);

    const [searched, setSearched] = useState(false);
    let [ingredient, setIngredient] = useState({amount: 0, unit: "", name: "", calories: 0});
    let currentFood = useSelector(state => state.food);

    useEffect(() => {
        console.log(currentFood.foodItems);
        if (currentFood.foodItems.data != undefined) {
            console.log(currentFood.foodItems.data.hints[0].food.nutrients.ENERC_KCAL);
            if (currentFood.foodItems.data.hints[0] != undefined) {
                setIngredient({amount: ingredient.amount, unit: ingredient.unit, name: currentFood.foodItems.data.hints[0].food.label, calories: currentFood.foodItems.data.hints[0].food.nutrients.ENERC_KCAL});

            } else {
                setIngredient({amount: ingredient.amount, unit: ingredient.unit, name: "unknown", calories: currentFood.foodItems.data.hints[0].food.nutrients.ENERC_KCAL});
            }
            //setIngredient({measurement: ingredient.measurement, unit: ingredient.unit, name: currentFood.foodItems.data.hints[0].food.label});

        }
    }, [currentFood]);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearched(false);
        console.log(e);

        let create = await createRecipe(name, author.data.id, time, description, ingredients, dates);
        await create(dispatch);
        ingredients = [];
        setJsxIngredients([]);

    }

    const getFood = (name) => {
        let getCurrentFood = getFoodByName(name);

        getCurrentFood(dispatch);

        // console.log(currentFood.foodItems);
        // if (currentFood.foodItems.data != undefined) {
        //     console.log(currentFood.foodItems.data.hints[0]);
        //     if (currentFood.foodItems.data.hints[0] != undefined) {
        //         setIngredient({measurement: ingredient.measurement, unit: ingredient.unit, name: currentFood.foodItems.data.hints[0].food.label});

        //     } else {
        //         setIngredient({measurement: ingredient.measurement, unit: ingredient.unit, name: "unknown"});
        //     }
        //     //setIngredient({measurement: ingredient.measurement, unit: ingredient.unit, name: currentFood.foodItems.data.hints[0].food.label});

        // }

    }

    const searchIngredient = (e) => {
        e.preventDefault();

        //console.log(ingredient.name);
        //console.log(ingredients);
        setSearched(true);
        getFood(ingredient.name);
    }

    const handleChange = (e) => {
        if (e.target.name == "Name") {
            setName(e.target.value);

            //console.log(name);
        } else if (e.target.name == "Description") {
            setDescription(e.target.value);
            //console.log(description);
        } else if (e.target.name == "time") {
            setTime(e.target.value);
        } else if (e.target.name == "amount") {
            setIngredient({amount: e.target.value, unit: ingredient.unit, name: ingredient.name, calories: ingredient.calories});
            //console.log(ingredient);
        } else if (e.target.name == "unit") {
            setIngredient({amount: ingredient.amount, unit: e.target.value, name: ingredient.name, calories: ingredient.calories});
            //console.log(ingredient);
        } else if (e.target.name == "Ingredient" || e.target.name == "name") {
            setSearched(false);
            setIngredient({amount: ingredient.amount, unit: ingredient.unit, name: e.target.value, calories: ingredient.calories});
            console.log(ingredient.name);
        } else if (e.target.name == "calories") {
            setIngredient({amount: ingredient.amount, unit: ingredient.unit, name: ingredient.name, calories: e.target.value});
        }
         else if (e.target.name == "search") {
            setSearch(e.target.value == "Search Ingredients");
            //console.log("Radio Button Value has changed");
        } else {
            console.log(e.target.name);
        }

        // if (author != null) {
        //     console.log(author.data.id);
        // }

    }

    const addIngredient = (e) => {
        e.preventDefault();
        setSearched(false);
        if (ingredient.unit == "") {
            setIngredient({amount: ingredient.amount, unit: "count(s)", name: ingredient.name});
        }
        ingredients.push(ingredient);
        //jsxIngredients.push(<li>{ingredient.measurement} {ingredient.unit} {ingredient.name}</li>);
        let listItem = <li>{ingredient.amount} {ingredient.unit} {ingredient.name} ({ingredient.calories} kCal)</li>;
        setJsxIngredients(ingList => [...ingList, listItem]);
    }

    if (ingredient.name != "" && searched) {
        if (search && ingredients.length > 0) {
            console.log("Search is true and ingredients are populated");
            return (
                <div id="recipe-builder">
                   <form onSubmit={handleSubmit}>
                        <FormInput style={{width: '250px'}} type="text" name="Name" handleChange={handleChange} />
                        <FormInput style={{width: '250px'}} type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput  type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                        <SearchBar name="name" isForm={false} onSubmit={searchIngredient} handleChange={handleChange} />
                        <FormInput style={{width: '177px'}} type="number" name="amount" display={`How many ${ingredient.name}(s)?`} handleChange={handleChange} />
                        <select name="unit" onChange={handleChange}>
                            <option value="count(s)" defaultValue={true}>count(s)</option>
                            <option value="tsp">tsp</option>
                            <option value="Tbsp">Tbsp</option>
                            <option value="cups">cup(s)</option>
                            <option value="pints">pint(s)</option>
                        </select>
                        <button onClick={addIngredient}>Add Ingredient</button>
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
                        <FormInput style={{width: '250px'}} type="text" name="Name" handleChange={handleChange} />
                        <FormInput style={{width: '250px'}} type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput  type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange}/>
                        <SearchBar name="name" isForm={false} onSubmit={searchIngredient} handleChange={handleChange} />
                        <FormInput style={{width: '177px'}} type="number" name="amount" display={`How many ${ingredient.name}(s)?`} handleChange={handleChange} /> 
                        <select name="unit" onChange={handleChange}>
                            <option value="count(s)" defaultValue={true}>count(s)</option>
                            <option value="tsp">tsp</option>
                            <option value="Tbsp">Tbsp</option>
                            <option value="cups">cup(s)</option>
                            <option value="pints">pint(s)</option>
                        </select>
                        <button onClick={addIngredient}>Add Ingredient</button>
                        <input type="submit" value="Create Recipe" />
                    </form>
                </div>
            )
        }
    } else {
        if (search && ingredients.length > 0) {
            console.log("Search is true and ingredients are populated");
            return (
                <div id="recipe-builder">
                <form onSubmit={handleSubmit}>
                        <FormInput style={{width: '250px'}} type="text" name="Name" handleChange={handleChange} />
                        <FormInput style={{width: '250px'}} id="inputStyle" type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                        <SearchBar name="Ingredient" isForm={false} onSubmit={searchIngredient} handleChange={handleChange} />

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
                        <FormInput style={{width: '250px'}} type="text" name="Name" handleChange={handleChange} />
                        <FormInput style={{width: '250px'}} type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                        <FormInput type="ingredient" name="Ingredient" handleChange={handleChange} />
                        <button onClick={addIngredient}>Add Ingredient</button>
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
                        <FormInput style={{width: '250px'}} type="text" name="Name" handleChange={handleChange} />
                        <FormInput style={{width: '250px'}} type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange}/>
                        <SearchBar name="Ingredient" isForm={false} onSubmit={searchIngredient} handleChange={handleChange} />
                        <input type="submit" value="Create Recipe" />
                    </form>
                </div>
            )
        }
        else {
            return (
                <div id="recipe-builder">
                    <form onSubmit={handleSubmit}>
                        <FormInput style={{width: '250px'}} type="text" name="Name" handleChange={handleChange} />
                        <FormInput style={{width: '250px'}} type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                        <FormInput type="ingredient" name="Ingredient" handleChange={handleChange} />
                        <button onClick={addIngredient}>Add Ingredient</button>

                        <input type="submit" value="Create Recipe" />
                    </form>
                </div>
            )
        }
    }
}