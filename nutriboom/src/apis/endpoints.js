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
        baseURL: 'jdbc:postgresql://database-batch212015.czyz18itmfhp.us-east-2.rds.amazonaws.com:5432/nutriboom'
    }
) 