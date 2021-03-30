import React, {useState} from 'react';
import MealList from './meal-list';

export default function MealPlanner() {  
    return (
        <div id="planner">
            <h3>Planned Meals Today</h3>
            <MealList />
        </div>
    )
}