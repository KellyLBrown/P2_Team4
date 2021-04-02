import React, {useEffect, useState, } from 'react';
import { fetchRecipe, fetchRecipes } from '../actions/actions';
import FormInput from './form-input';
import {store} from '../store';
import { useSelector } from 'react-redux';

export default function GetRecipesForm(props){
    const [recipe, setRecipe] = useState({author: null, description: null, recipename: null, time:null});
    let currentRecipe = useSelector(state => state.recipe);
    let user = useSelector(state => state.user);
    // currentUser.currentUser.data.firstName
    console.log(user.currentUser.data.id);
    let myauthor = user.currentUser.data.id;
    //console.log(myauthor);
    const handleChange = (e) => {
        if (e.target.name == 'Recipe Name') {
            setRecipe({recipename:e.target.value});
        }
    }

    const handleRecipe = async (e) => {
        e.preventDefault();
        
        let getRecipe = await fetchRecipes(myauthor);
        await getRecipe(store.dispatch);
    }

    console.log(currentRecipe.fetchedrecipe);
    if(currentRecipe.fetchedrecipe.data != undefined){
        return (
            <div id="register-form" className="row" class="row">
            <form onSubmit={handleRecipe}>
                <FormInput type="text" name="Recipe Name"  value={recipe.recipename} handleChange={handleChange} />
                <input type="submit" value="Retrieve Recipe" />
            </form><ul>
             Recipe: {currentRecipe.fetchedrecipe.data.name} 
             {/* <li>  {currentRecipe.fetchedrecipe.data.author}</li> */}
             <br></br><br></br>
             Steps: {currentRecipe.fetchedrecipe.data.description}
             <br></br><br></br>
             Ingredients for this recipe: 
               {/* {currentRecipe.fetchedrecipe.data.ilist.map((ingredient) => <li key = {ingredient.iid}>{ingredient.amount} of {ingredient.name}
               (s) which have {ingredient.calories} calories each.</li>)}  */}
             <br></br>
             <li> Prep time</li>
             <ol>  {currentRecipe.fetchedrecipe.data.time} minutes.</ol>
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