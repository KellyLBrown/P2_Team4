import React from 'react';
import GetRecipe from './get-recipe';
import GetRecipesForm from './get-recipes-by-auth';
import MealPlanner from './meal-planner';
import NutritionInfo from './nutrition-info';

export default function Home() {
    return (
        <div id="home" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://nutriboom.s3.us-east-2.amazonaws.com/garlic.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
          }} >
            {/* <NutritionInfo /> */}
            <MealPlanner />
            <GetRecipe />
        </div>
    )
}
