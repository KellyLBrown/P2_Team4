import React, {useEffect, useState, } from 'react';
import { fetchRecipe, fetchRecipesByAuthor } from '../actions/actions';
import FormInput from './form-input';
import {store} from '../store';
import { useSelector } from 'react-redux';

export default function GetRecipesForm(props){
    const [recipes, setRecipes] = useState({author: null, description: null, recipename: null, time:null});
    let currentRecipes = useSelector(state => state.recipes);
    let user = useSelector(state => state.user);
    console.log(user.currentUser.data.id);
    let myauthor = user.currentUser.data.id;
   
    const handleRecipe = async (e) => {
        e.preventDefault();
        setRecipes({recipename:e.target.value});
        let getRecipes = await fetchRecipesByAuthor(myauthor);
        await getRecipes(store.dispatch);
    }

    console.log(currentRecipes);
    if(currentRecipes.recipes.data != undefined){
        return (
            <div id="register-form" className="row" class="row">
            <form onSubmit={handleRecipe}>
                <input type="submit" value="Get my recipes" />
            </form><ul>
             Recipes: <br></br>{currentRecipes.recipes.data.map((recipe) => 
             <li key= {recipe.name}>{recipe.name} <br></br><br></br> Steps:  {recipe.description}
             <br></br><br></br>{recipe.ilist.map((ilist) => 
             <li key={ilist.iid}>Ingredients for this recipe: {ilist.amount} of {ilist.name}
             (s) which contains {ilist.calories} calories each.</li>)}
             <br></br><br></br>
             </li>)} 
             <br></br><br></br>
            </ul>
        </div>
        )
    }

    return (
        <div id="register-form" className="row" class="row">
            <form onSubmit={handleRecipe}>
                <input type="submit" value="Get my recipes" />
            </form>
        </div>
    )
}