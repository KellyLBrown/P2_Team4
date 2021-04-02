import React from 'react';
import GetRecipe from './get-recipe';
import GetRecipesForm from './get-recipes-by-auth';
import MealPlanner from './meal-planner';
import NutritionInfo from './nutrition-info';

export default function Home() {
    return (
        <div id="home">
            <NutritionInfo />
            <MealPlanner />
            <GetRecipe />
        </div>
    )
}
