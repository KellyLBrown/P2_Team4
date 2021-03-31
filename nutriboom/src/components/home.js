import React from 'react';
import GetRecipe from './get-recipe';
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