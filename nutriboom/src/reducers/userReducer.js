import {AUTH_LOGIN, AUTH_LOGOUT, NEW_USER} from "../actions/types";

const initialState = {
    currentUser: null,
    isLoggedIn: false
}

export default function(state=initialState, action) {
    // console.log("In user reducer");
    // console.log(action);
    switch (action.type) {
        case AUTH_LOGIN: 
            return {
                ...state,
                currentUser:action.currentUser,
                isLoggedIn:true
            }
        case AUTH_LOGOUT: 
            return initialState;
        default:
            return state;
    }
}
