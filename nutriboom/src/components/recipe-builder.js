import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import FormInput from './form-input';

export default function RecipeBuilder(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredient, setIngredient] = useState({measurement: 0, unit: "", name: ""});

    let ingredients = [];

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
        }
    }

    const addIngredient = (e) => {
        e.preventDefault();
        console.log('In add method');
    }

    return (
        <div id="recipe-builder">
            <form onSubmit={handleSubmit}>
                <FormInput type="text" name="Name" handleChange={handleChange} />
                <FormInput type="textarea" name="Description" handleChange={handleChange} />
                <FormInput type="text" name="Ingerdient" handleChange={handleChange} />
                <button onClick={addIngredient}>Search/Add</button>
                <input type="submit" value="Create Recipe" />
            </form>
        </div>
    )
}