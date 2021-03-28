import {FETCH_FOOD, GET_FOOD_BY_ID} from "../actions/types";

// 
const initialState = {
    foodItems: [],
    foodItem: {
        id: 0,
        name: "",
        calories: 0
    }
}

export default function(state=initialState, action) {
    console.log("In food reducer");
    console.log(action.type);
    switch (action.type) {
        case FETCH_FOOD: 
        return {
            ...state,
            foodItems:action.payload
        }
        case GET_FOOD_BY_ID:
        return {
            ...state,
            foodItem:action.payload
        }
        default:
            return state;
    }
}