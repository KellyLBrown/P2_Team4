import {AUTH_LOGIN, AUTH_LOGOUT, NEW_USER} from "../actions/types";

const initialState = {
    currentUser: null,
    isLoggedIn: false
}

export default function(state=initialState, action) {
    // console.log(action);
    console.log(action.type);
    switch (action.type) {
        case AUTH_LOGIN:
            console.log("In user reducer AUTH_LOGIN"); 
            return {
                ...state,
                currentUser:action.currentUser,
                isLoggedIn:true
            }
        case AUTH_LOGOUT: 
            return initialState;
        case NEW_USER:
            return state;
        default:
            return state;
    }
}
