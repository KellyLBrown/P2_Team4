import React, {useState, useEffect} from 'react';

export default function IngredientList(props) {
    let ingredients = props.ingredients;
    let id = 0;

    return (
        <div>
            <ul>{ingredients.map((ingredient) => {
                <li key={id++}>{ingredient.measurement} {ingredient.unit} {ingredient.Ingredient}</li>
            })}</ul>
        </div>
    )
}