import React from 'react';
import GetRecipesForm from './get-recipes-by-auth';

export default function ViewMyRecipes(props) {
    const date = props.date;

    return (
        <div id="viewMyRecipes">
            
            <GetRecipesForm date={date} />
        </div>
    )
}
