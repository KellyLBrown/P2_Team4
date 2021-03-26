import axios from 'axios';

// Creating an axios instance
export const foodapi = axios.create(
    {
        // TODO link food api to axios instance
        baseURL: 'jdbc:postgresql://domdb1.ch05h4i2oiwh.us-east-2.rds.amazonaws.com:5432/fooddb'
    }
) 

export const recipeapi = axios.create(
    {
        // TODO link recipe api to this axois instance
        baseURL: 'https://api.edamam.com/api/food-database/v2'
    }
) 