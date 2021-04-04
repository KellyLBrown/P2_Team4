import React from 'react';
import GetRecipesForm from './get-recipes-by-auth';

export default function ViewMyRecipes(props) {
    const date = props.date;

    return (
        <div id="viewMyRecipes" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://nutriboom.s3.us-east-2.amazonaws.com/garlic.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
          }}>
            
            <GetRecipesForm date={date} />
        </div>
    )
}
