import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import FormInput from './form-input';
import IngredientList from './ingredient-list';

export default function RecipeBuilder(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    let [ingredient, setIngredient] = useState({measurement: 0, unit: "", Ingredient: ""});
    let id = 0;

    let ingredients = [];
    let jsxIngredients = ingredients.map((ingredient) => {
        return <li key={id++}>{`${ingredient.measurement} ${ingredient.unit} ${ingredient.Ingredient}`}</li>
    });

    const updateList = () => {
        //console.log(jsxIngredients);
        jsxIngredients = ingredients.map((ingredient) => {
            return <div><li key={id++}>{`${ingredient.measurement} ${ingredient.unit} ${ingredient.Ingredient}`}</li></div>
        })
        //console.log(jsxIngredients);
    }

    useEffect(() => {
        jsxIngredients = ingredients.map((ingredient) => {
            //<li>{ingredient.measurement} {ingredient.unit} {ingredient.Ingredient}</li>
            return <li key={id++}>{`${ingredient.measurement} ${ingredient.unit} ${ingredient.Ingredient}`}</li>
        })
        //console.log(jsxIngredients.length);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
    }

    const handleChange = async (e) => {
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
        }
        console.log(ingredients);
    }

    const addIngredient = (e) => {
        e.preventDefault();
        console.log(ingredients);
        ingredients.push(ingredient);
        //jsxIngredients.push(<li>{ingredient.measurement} {ingredient.unit} {ingredient.Ingredient}</li>);
        jsxIngredients.push(<li>{ingredient}</li>)
        updateList();
        console.log(ingredients);
        //console.log(jsxIngredients);
    }

    if (jsxIngredients.length > 0) {
        return (
            <div id="recipe-builder">
                <form onSubmit={handleSubmit}>
                    <FormInput type="text" name="Name" handleChange={() => {console.log("*")}} />
                    <FormInput type="textarea" name="Description" handleChange={() => {console.log("*")}} />
                    <FormInput type="ingredient" name="Ingredient" handleChange={() => {console.log("*")}} />
                    <button onClick={addIngredient}>Search/Add</button>
                    <h4>Current Ingredients: </h4>
                    {/* <ul id="ingredient-list">{ingredients.map((ingredient) => {
                        <li key={id++}>{`${ingredient.measurement} ${ingredient.unit} ${ingredient.Ingredient}`}</li>
                    })}</ul> */}
                    <IngredientList ingredients={ingredients} />
                    <input type="submit" value="Create Recipe" />
                </form>
            </div>
        )
    }

    return (
        <div id="recipe-builder">
            <form onSubmit={handleSubmit}>
                <FormInput type="text" name="Name" handleChange={handleChange} />
                <FormInput type="textarea" name="Description" handleChange={handleChange} />
                <FormInput type="ingredient" name="Ingredient" handleChange={handleChange} />
                <button onClick={addIngredient}>Search/Add</button>
                <input type="submit" value="Create Recipe" />
            </form>
        </div>
    )
}