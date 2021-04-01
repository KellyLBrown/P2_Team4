import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormInput from './form-input';
import SearchBar from './search-bar';
import {getFoodByName, createRecipe} from '../actions/actions'; 

let ingredients = [];
let dates = [];
let jsxIngredients = [];
export default function RecipeBuilder(props) {
    const [name, setName] = useState("");
    let author = useSelector(state => state.user.currentUser);

    const [description, setDescription] = useState("");
    const [time, setTime] = useState(0);   // Signifies the date and time the recipe was created.
    const [date, setDate] = useState(null);         // Signifies the date a user may schedule this recipe. Once selected, it will be added to a list of dates.
    const [search, setSearch] = useState(true);
    const [searched, setSearched] = useState(false);
    let [ingredient, setIngredient] = useState({measurement: 0, unit: "", Ingredient: ""});
    let currentFood = useSelector(state => state.food);

    useEffect(() => {

    }, []);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearched(false);
        console.log(e);
        let create = await createRecipe(name, author.data.id, time, description, ingredients, dates);
        await create(dispatch);
        ingredients = [];
        jsxIngredients = [];
    }

    const getFood = async (name) => {
        let getCurrentFood = await getFoodByName(name);
        await getCurrentFood(dispatch);
        console.log(name);
        if (currentFood.foodItems.data != undefined) {
            console.log(currentFood.foodItems.data);
            if (currentFood.foodItems.data.hints[0] != undefined) {
                setIngredient({measurement: ingredient.measurement, unit: ingredient.unit, Ingredient: currentFood.foodItems.data.hints[0].food.label});
            } else {
                setIngredient({measurement: ingredient.measurement, unit: ingredient.unit, Ingredient: "unknown"});
            }
        }
    }

    const searchIngredient = (e) => {
        e.preventDefault();
        //console.log(e);
        console.log(ingredients);
        setSearched(true);
        getFood(ingredient.Ingredient);
    }

    const handleChange = (e) => {
        if (e.target.name == "Name") {
            setName(e.target.value);
            //console.log(name);
        } else if (e.target.name == "Description") {
            setDescription(e.target.value);
            //console.log(description);
        } else if (e.target.name == "measurement") {
            setIngredient({measurement: e.target.value, unit: ingredient.unit, Ingredient: ingredient.Ingredient});
            //console.log(ingredient);
        } else if (e.target.name == "unit") {
            setIngredient({measurement: ingredient.measurement, unit: e.target.value, Ingredient: ingredient.Ingredient});
            //console.log(ingredient);
        } else if (e.target.name == "Ingredient") {
            setSearched(false);
            setIngredient({measurement: ingredient.measurement, unit: ingredient.unit, Ingredient: e.target.value});
            //console.log(ingredient);
        } else if (e.target.name == "search") {
            setSearch(e.target.value == "Search Ingredients");
            //console.log("Radio Button Value has changed");
        } else {
            //console.log(e.target.name);
        }

        if (author != null) {
            console.log(author.data.id);
        }
    }

    const addIngredient = (e) => {
        e.preventDefault();
        setSearched(false);
        if (ingredient.unit == "") {
            setIngredient({measurement: ingredient.measurement, unit: "count(s)", Ingredient: ingredient.Ingredient});
        }
        ingredients.push(ingredient);
        jsxIngredients.push(<li>{ingredient.measurement} {ingredient.unit} {ingredient.Ingredient}</li>);
    }

    const selectDate = (e) => {
        e.preventDefault();
        if (date != null) {
            dates.push(date);
        }
    }

    if (ingredient.Ingredient != "" && searched) {
        if (search && ingredients.length > 0) {
            console.log("Search is true and ingredients are populated");
            return (
                <div id="recipe-builder">
                   <form onSubmit={handleSubmit}>
                        <FormInput type="text" name="Name" handleChange={handleChange} />
                        <FormInput type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                        <SearchBar name="Ingredient" isForm={false} onSubmit={searchIngredient} handleChange={handleChange} />
                        <FormInput type="number" name="measurement" display={`How many ${ingredient.Ingredient}(s)?`} handleChange={handleChange} />
                        <select name="unit" onChange={handleChange}>
                            <option value="count(s)" defaultValue={true}>count(s)</option>
                            <option value="tsp">tsp</option>
                            <option value="Tbsp">Tbsp</option>
                            <option value="cups">cup(s)</option>
                            <option value="pints">pint(s)</option>
                        </select>
                        <button onClick={addIngredient}>Add Ingredient</button>
                        <FormInput type="date" name="date" display="When would you like to prepare this recipe (You may select multiple dates)?" handleChange={handleChange} /> 
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
                        <FormInput type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange}/>
                        <SearchBar name="Ingredient" isForm={false} onSubmit={searchIngredient} handleChange={handleChange} />
                        <FormInput type="number" name="measurement" display={`How many ${ingredient.Ingredient}(s)?`} handleChange={handleChange} /> 
                        <select name="unit" onChange={handleChange}>
                            <option value="count(s)" defaultValue={true}>count(s)</option>
                            <option value="tsp">tsp</option>
                            <option value="Tbsp">Tbsp</option>
                            <option value="cups">cup(s)</option>
                            <option value="pints">pint(s)</option>
                        </select>
                        <button onClick={addIngredient}>Add Ingredient</button>
                        <FormInput type="date" name="date" display="When would you like to prepare this recipe (You may select multiple dates)?" handleChange={handleChange} /> 
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
                        <FormInput type="text" name="Name" handleChange={handleChange} />
                        <FormInput type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                        <SearchBar name="Ingredient" isForm={false} onSubmit={searchIngredient} handleChange={handleChange} />
                        <FormInput type="date" name="date" display="When would you like to prepare this recipe (You may select multiple dates)?" handleChange={handleChange} /> 
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
                        <FormInput type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                        <FormInput type="ingredient" name="Ingredient" handleChange={handleChange} />
                        <button onClick={addIngredient}>Add</button>
                        <FormInput type="date" name="date" display="When would you like to prepare this recipe (You may select multiple dates)?" handleChange={handleChange} /> 
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
                        <FormInput type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange}/>
                        <SearchBar name="Ingredient" isForm={false} onSubmit={searchIngredient} handleChange={handleChange} />
                        <FormInput type="date" name="date" display="When would you like to prepare this recipe (You may select multiple dates)?" handleChange={handleChange} /> 
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
                        <FormInput type="number" name="time" display="Prep Time (in minutes)" handleChange={handleChange} />
                        <FormInput type="textarea" name="Description" handleChange={handleChange} />
                        <FormInput type="radio2" name="search" val1="Search Ingredients" val2="Add Custom Ingredient" handleChange={handleChange} />
                        <FormInput type="ingredient" name="Ingredient" handleChange={handleChange} />
                        <button onClick={addIngredient}>Add</button>
                        <FormInput type="date" name="date" display="When would you like to prepare this recipe (You may select multiple dates)?" handleChange={handleChange} /> 
                        <input type="submit" value="Create Recipe" />
                    </form>
                </div>
            )
        }
    }
}