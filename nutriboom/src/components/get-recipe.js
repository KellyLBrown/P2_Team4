import React, {useState} from 'react';
import { fetchRecipe, fetchRecipes } from '../actions/actions';
import FormInput from './form-input';
import {store} from '../store';

export default function GetRecipeForm(props){
    const [recipe, setRecipe] = useState({author: null, description: null, recipename: null, time:null});

    const handleChange = (e) => {
        if (e.target.name == 'Recipe Name') {
            setRecipe({recipename:e.target.value});
        }
    }

    const handleRecipe = async (e) => {
        e.preventDefault();
        let getRecipe = await fetchRecipe(recipe.author, recipe.description, recipe.recipename, recipe.time);
        await getRecipe(store.dispatch);
    }

    return (
        <div id="register-form" className="row" class="row">
            <form onSubmit={handleRecipe}>
                <FormInput type="text" name="Recipe Name"  value={recipe.recipename} handleChange={handleChange} />
                <input type="submit" value="Retrieve Recipe" />
            </form>
        </div>
    )
}