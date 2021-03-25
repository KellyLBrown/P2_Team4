import {AUTH_LOGIN, AUTH_LOGOUT, NEW_USER} from "../actions/types";

const initialState = {
    username: "", 
    isLoggedIn: false
}

export default function(state=initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN: 
            return {
                ...state,
                username:action.username,
                isLoggedIn:false
            }
        case AUTH_LOGOUT: 
            return initialState;
        default:
            return state;
    }
}
