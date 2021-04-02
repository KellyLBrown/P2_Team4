import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import {fetchRecipes, getFoodByName} from '../actions/actions';


export default function MealList(props) {
    let date;

    if (props.date != undefined) {
        date = props.date;
    } else {
        date = null;
    }

    let jsxRecipes = props.jsxRecipes;
    console.log(jsxRecipes);

    let currentFood = useSelector(state => state.recipes);
    let currentUser = useSelector(state => state.user);
    let recipeList = [];
    const [noname, setNoName] = useState(false);    // I don't know what to call this variable yet...
    let image = props.image;
    console.log(image.data.bytes);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(recipeList);

        if (recipeList.payload != undefined) {
            for (let r of recipeList.payload.data) {
                if (date && image) {
                    jsxRecipes.push(<li key={r.rId}>
                        <img id="ItemPreview" src={`data:image/png;base64,${image.data.bytes}`} />{r.name} 
                            <button onClick={() => {}}>+
                            </button>
                        </li>)
                } else if (date) {
                    jsxRecipes.push(<li key={r.rId}>
                        {r.name} 
                            <button onClick={() => {}}>+
                            </button>
                        </li>)
                } else if (image) {
                    jsxRecipes.push(<li key={r.rId}><img id="ItemPreview" src={`data:image/png;base64,${image.data.bytes}`} alt="A pic of a mountain" />
                    {r.name}</li>)
                } else {
                    jsxRecipes.push(<li key={r.rId}>{r.name}</li>)
                }
            }
            console.log(jsxRecipes);
        }
    }, [jsxRecipes])

    const scheduleRecipe = () => {
        
    }

    const renderAddRecipe = async (e) => {
        console.log(currentUser.currentUser.data.id);
        let getAllRecipes = await fetchRecipes(currentUser.currentUser.data.id);
        recipeList = await getAllRecipes(dispatch);
        // console.log(recipeList);

        // for (let r of recipeList.payload.data) {
        //     if (date) {
        //         jsxRecipes.push(<li key={r.rId}>{r.name} <button onClick={() => {}}>+</button></li>)
        //     } else {
        //         jsxRecipes.push(<li key={r.rId}>{r.name}</li>)
        //     }
        // }
        // console.log(jsxRecipes);
    }

    if (!date) {
        return (
            <div id="meal-list">
                <ul>{jsxRecipes}</ul>
            </div>
        )
    }
    return (
        <div id="meal-list">
            <ul>{jsxRecipes}</ul>
            <button onClick={renderAddRecipe}>Add Recipe</button>
        </div>
    )
    
}