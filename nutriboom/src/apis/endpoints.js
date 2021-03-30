import axios from 'axios';

// Creating an axios instance
export const foodapi = axios.create(
    {
        // TODO link food api to axios instance
        baseURL: 'https://api.edamam.com/api/food-database/v2'
    }
) 

export const recipeapi = axios.create(
    {
        // TODO link recipe api to this axois instance
        baseURL: 'http://localhost:8080'
    }
)