import React, {useEffect, useState, } from 'react';
import { fetchRecipe, fetchRecipes, fetchRecipesByAuthor, scheduleRecipe } from '../actions/actions';
import FormInput from './form-input';
import {store} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export default function GetRecipesForm(props){
    const [recipes, setRecipes] = useState({author: null, description: null, recipename: null, time:null});
    const dispatch = useDispatch();
    let date = props.date;
    let currentDate = props.date;
    let javaDate = currentDate ? `${currentDate}T00:00:00.000+00:00` : undefined;
    console.log(date);
    let currentRecipes = useSelector(state => state.recipes);
    let image = currentRecipes.image.data;
    let user = useSelector(state => state.user);
    let currentRecipe = useSelector(state => state.recipe);
    if (!user.currentUser) {
        <Redirect to="/login" />
    }
    let myauthor = user.currentUser.data.id;
   
    useEffect(() => {
        
    }, [currentRecipes])

    const handleRecipe = async (e) => {
        e.preventDefault();
        setRecipes({recipename:e.target.value});
        let getRecipes = await fetchRecipesByAuthor(myauthor);
        await getRecipes(dispatch);
        let getRecipesWithDates = await fetchRecipes(myauthor);
        await getRecipesWithDates(dispatch);
    }
    
    const localScheduleRecipe = async (e) => {
        //console.log(currentRecipes.dates);
        let recipeList = [];
        //console.log(recipeList);
        console.log(e.target.value);
        let uId = user.currentUser.data.id;
        for (let date of currentRecipes.dates.data) {
            let simpleDate = date.date.toString().slice(0, 10);
            //console.log(simpleDate);
            if (simpleDate == currentDate) {
                for (let r of date.scheduledRecipes) {
                    recipeList.push(r);
                    break;
                }
            }
            console.log(recipeList);
        }
        console.log(e.target.value);
        let targetRecipe = await fetchRecipe(e.target.value);
        await targetRecipe(store.dispatch);
            console.log(currentRecipe.fetchedrecipe.data);
            recipeList.push(currentRecipe.fetchedrecipe.data); 
        
        console.log(recipeList);
        console.log(uId);
        console.log(date);
        let schedule = await scheduleRecipe(uId, date, recipeList);
        await schedule(store.dispatch);
    }

    //console.log(currentRecipes);
    if(currentRecipes.recipes.data != undefined){
        
        if (image) {
            return (

                <div style={{textAlign: "center"}}>
                    <form onSubmit={handleRecipe}>
                        <input type="submit" value="Get my recipes" />
                    </form>

                    <ul style={{textAlign: "left"}}>
                    <h2 style={{fontWeight: "lighter"}}>Recipes:</h2><br></br>
                        {currentRecipes.recipes.data.map((recipe) => 
                        <li key= {recipe.name}>
                        <h3 style={{display: "inline"}}>{recipe.name}</h3> <button style={{float: "right"}} onClick={localScheduleRecipe} value={recipe.name}>Schedule Recipe</button> <br></br>
                        <img id="ItemPreview" src={`data:image/png;base64,${image.bytes}`} alt="A pic of a mountain" />
                        <br></br> Steps:  {recipe.description}<br></br>
                        
                        <p>Ingredients for this recipe:  </p><br></br>
                        {recipe.ilist.map((ilist) => 
                        <li key={ilist.iid}>{ilist.amount} of {ilist.name}
                        (s) which contains {ilist.calories} calories each.</li>)}
                        <p></p><br></br>
                        <p></p><br></br>
                        <p></p><br></br>
                        </li>)}
                    </ul>
                </div>

            )
        } else {
            return (
                <div style={{textAlign: "center"}}>
                    <form onSubmit={handleRecipe}>
                        <input type="submit" value="Get my recipes" />
                    </form>

                    <ul style={{textAlign: "left"}}>
                    <h2 style={{fontWeight: "lighter"}}>Recipes:</h2><br></br>
                        {currentRecipes.recipes.data.map((recipe) => 
                        <li key= {recipe.name}>
                        <h3 style={{display: "inline"}}>{recipe.name}</h3> <button style={{float: "right"}} onClick={localScheduleRecipe} value={recipe.name}>Schedule Recipe</button> <br></br>
                        <br></br> Steps:  {recipe.description}<br></br>
                        
                        <p>Ingredients for this recipe:  </p><br></br>
                        {recipe.ilist.map((ilist) => 
                        <li key={ilist.iid}>{ilist.amount} of {ilist.name}
                        (s) which contains {ilist.calories} calories each.</li>)}
                        <p></p><br></br>
                        <p></p><br></br>
                        <p></p><br></br>
                        </li>)}
                    </ul>
                </div>
            )
        }
    }

    return (
        <div style={{textAlign: "center"}}>
            <form onSubmit={handleRecipe}>
                <input type="submit" value="Get my recipes" />
            </form>
        </div>
    )
}