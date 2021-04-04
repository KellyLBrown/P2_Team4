import React, {useEffect, useState, } from 'react';
import { fetchRecipe, fetchRecipes } from '../actions/actions';
import FormInput from './form-input';
import {store} from '../store';
import { useSelector } from 'react-redux';

export default function GetRecipeForm(props){
    
    const [recipe, setRecipe] = useState({author: null, description: null, recipename: null, time:null});
    
    let currentRecipe = useSelector(state => state.recipe);
    console.log(currentRecipe);
    const handleChange = (e) => {
        if (e.target.name == 'Recipe Name') {
            setRecipe({recipename:e.target.value});
        }
    }

    const handleRecipe = async (e) => {
        e.preventDefault();
        console.log(recipe.recipename)
        let getRecipe = await fetchRecipe(recipe.recipename);
        await getRecipe(store.dispatch);
        console.log(getRecipe);
    }

    if(currentRecipe.fetchedrecipe.data != undefined){
        return (
            <div id="register-form" className="row">
            <form onSubmit={handleRecipe}>
                <FormInput type="text" name="Recipe Name"  value={recipe.recipename} handleChange={handleChange} />
                <input type="submit" value="Retrieve Recipe" />
            </form><ul>
             Recipe: {currentRecipe.fetchedrecipe.data.name} 
             <br></br><br></br>
             Steps: {currentRecipe.fetchedrecipe.data.description}
             <br></br><br></br>
             Ingredients for this recipe: 
               {currentRecipe.fetchedrecipe.data.ilist.map((ingredient) => <li key = {ingredient.iid}>{ingredient.amount} of {ingredient.name}
               (s) which have {ingredient.amount * ingredient.calories} calories.</li>)} 
             <br></br>
             <li> Prep time</li>
             <ol>  {currentRecipe.fetchedrecipe.data.time} minutes.</ol>
            </ul>
        </div>
        )
    }

    return (
        <div id="register-form" className="row">
            <form onSubmit={handleRecipe}>
                <FormInput type="text" name="Recipe Name"  value={recipe.recipename} handleChange={handleChange} />
                <input type="submit" value="Retrieve Recipe" />
            </form>
        </div>
    )
}