import React, {useEffect, useState} from 'react';
import GetRecipe from './get-recipe';
import GetRecipesForm from './get-recipes-by-auth';
import MealPlanner from './meal-planner';
import MealList from './meal-list';
import NutritionInfo from './nutrition-info';

import Header from "./header";
import {store} from '../store';

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
    let image = useSelector(state => state.recipes);
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
            if (currentUser.currentUser) {
                let recipes = await fetchRecipes(currentUser.currentUser.data.id);
                let someList = await recipes(dispatch);
                setRecipeList(someList);
                console.log(recipeList);
            }
        }

        const getARecipeImage = async () => {
            let getRecipeImage = getImage('mountain.png');
            getRecipeImage(dispatch);
            console.log(image);
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
                if (image.image) {
                    jsxRecipes.push(<li key={r.rId}><img id="ItemPreview" src={`data:image/png;base64,${image.image.data.bytes}`} alt="A pic of a mountain" />{r.name}</li>);
                } else {
                    jsxRecipes.push(<li>{r.name}</li>);
                }
            }
            jsxRecipes.push(<li>Total Daily Calories: {totalCalories}</li>)
            console.log(jsxRecipes);
            if (image.image.data) {
                setMealList(<MealList date={date} jsxRecipes={jsxRecipes} image={image.image.data} />);
            } else {
                setMealList(<MealList date={date} jsxRecipes={jsxRecipes} />);
            }
        } else {
            getRecipesByDate();
            getARecipeImage();
        }

        console.log(recipeList);
    

    }, [recipeList])

    const checkDatesEqual = (otherDate) => {
        let dateAsString = otherDate.slice(0, 10);
        console.log(date + "   " + dateAsString);
        return date === dateAsString;
    }
    
    return (
        <div id="home" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://nutriboom.s3.us-east-2.amazonaws.com/garlic.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundAttachment: "fixed",
            textAlign: "center"
          }} >
              <Header /> {/*title={store.getState().user.currentUser != null ? `Welcome, ${store.getState().user.currentUser.firstname}!` : "Welcome, user!"}*/}
              <div style={{

                  width: "20%",
                  margin: "auto",
                  textAlign: "left"

              }}>
                    
                        {/* <NutritionInfo /> */}
                        {mealList}
                        <GetRecipe />
                    
                </div>
            
            
        </div>
    )
}
