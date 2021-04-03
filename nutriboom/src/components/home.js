import React, {useEffect, useState} from 'react';
import GetRecipe from './get-recipe';
import GetRecipesForm from './get-recipes-by-auth';
import MealPlanner from './meal-planner';
import MealList from './meal-list';
import NutritionInfo from './nutrition-info';
import {useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {fetchRecipes, fetchRecipesByAuthor, getImage, getRecipesFromDate} from '../actions/actions';

export default function Home() {
    let jsxRecipes = [];
    let scheduledRecipes = [];
    let sr = [];
    let currentUser = useSelector(state => state.user);
    if(currentUser == null) {
        <Link to="./login">Log Out</Link>
    }
    const [recipeList, setRecipeList] = useState([]);
    const [rs, setrs] = useState([]);
    const dispatch = useDispatch();
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    const [mealList, setMealList] = useState(<MealList date={date} jsxRecipes={jsxRecipes} />);

    useEffect(() => {
        console.log(date);
        
        console.log(rs.payload);


        const getRecipesByDate = async () => {
            jsxRecipes = [];    // Empty jsxRecipes to prevent static or duplicate elements
            let recipes = await fetchRecipes(currentUser.currentUser.data.id);
            let someList = await recipes(dispatch);
            setRecipeList(someList);
            console.log(recipeList);
            }

            
        if (recipeList.payload != undefined) {
            for (let r of recipeList.payload.data) {
                console.log(r)
                console.log(date);
                if (checkDatesEqual(r.date)) {
                    scheduledRecipes = r.scheduledRecipes;
                }
            }
            console.log(scheduledRecipes);
            let totalCalories = 0;
            jsxRecipes.push(<h3>Today's Recipes:</h3>)
            for (let r of scheduledRecipes) {
                console.log(r.ilist);
                for (let c of r.ilist) {
                    totalCalories += c.calories;
                }
                jsxRecipes.push(<li>{r.name}</li>)
            }
            jsxRecipes.push(<li>Total Daily Calories: {totalCalories}</li>)
            console.log(jsxRecipes);
            setMealList(<MealList date={date} jsxRecipes={jsxRecipes} />);
        } else {
            getRecipesByDate();
        }

        console.log(recipeList);
    

    }, [recipeList])

    


    const checkDatesEqual = (otherDate) => {
        let dateAsString = otherDate.slice(0, 10);
        console.log(date + "   " + dateAsString);
        return date === dateAsString;
    }
  

    

    return (
        <div id="home">
            {/* <NutritionInfo /> */}
            {mealList}
            <GetRecipe />
        </div>
    )
}
