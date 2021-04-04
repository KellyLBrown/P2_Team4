import React, {useEffect, useState, } from 'react';
import { fetchRecipe, fetchRecipes, fetchRecipesByAuthor, scheduleRecipe } from '../actions/actions';
import FormInput from './form-input';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export default function GetRecipesForm(props){
    const [recipes, setRecipes] = useState({author: null, description: null, recipename: null, time:null});
    const dispatch = useDispatch();
    let currentDate = props.date;
    let javaDate = currentDate ? `${currentDate}T00:00:00.000+00:00` : undefined;
    console.log(javaDate);
    let currentRecipes = useSelector(state => state.recipes);
    let image = currentRecipes.image.data;
    let user = useSelector(state => state.user);
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
    
    const localScheduleRecipe = (e) => {
        //console.log(currentRecipes.dates);
        let recipeList = [];
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
        }
        console.log(e.target.value);
        let targetRecipe = fetchRecipe(e.target.value);
        let recipe = targetRecipe(dispatch);
        if (recipe) {
            recipeList.push(recipe.data); 
        } else {
            alert("The target recipe is null! Panic!!!");
        }
        let schedule = scheduleRecipe(uId, javaDate, recipeList);
        schedule(dispatch);
    }

    //console.log(currentRecipes);
    if(currentRecipes.recipes.data != undefined){
        if (image) {
            return (
                <div id="register-form" className="row" class="row">
                <form onSubmit={handleRecipe}>
                    <input type="submit" value="Get my recipes" />
                </form><ul>
                Recipes: <br></br>{currentRecipes.recipes.data.map((recipe) => 
                <li key= {recipe.name}><img id="ItemPreview" src={`data:image/png;base64,${image.bytes}`} alt="A pic of a mountain" />
                 {recipe.name} <br></br><br></br> Steps:  {recipe.description}
                <br></br><br></br>{recipe.ilist.map((ilist) => 
                <li key={ilist.iid}>Ingredients for this recipe: {ilist.amount} of {ilist.name}
                (s) which contains {ilist.calories} calories each.</li>)}
                <br></br><br></br>
                <button onClick={localScheduleRecipe} value={recipe.name}>Schedule Recipe</button></li>)} 
                <br></br><br></br>
                </ul>
            </div>
            )
        } else {
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
                <button onClick={localScheduleRecipe} value={recipe.name}>Schedule Recipe</button></li>)} 
                <br></br><br></br>
                </ul>
            </div>
            )
        }
    }

    return (
        <div id="register-form" className="row" class="row">
            <form onSubmit={handleRecipe}>
                <input type="submit" value="Get my recipes" />
            </form>
        </div>
    )
}