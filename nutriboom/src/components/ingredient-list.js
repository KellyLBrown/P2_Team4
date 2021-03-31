import React, {useState, useEffect} from 'react';

export default function IngredientList(props) {
    let ingredient = props.ingredient;
    let ingredients = props.ingredients;
    let id = 0;
    let jsxIngredients = ingredients.map((ingredient) => {
        <li key={id++}>{ingredient.measurement} {ingredient.unit} {ingredient.Ingredient}</li>
    })

    useEffect(() => {console.log(jsxIngredients);});

    return (
        <div>
            <ul>{jsxIngredients}</ul>
        </div>
    )
}