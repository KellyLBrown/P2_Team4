import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];

// const middlewareAndExtension = () => {
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//     applyMiddleware(thunk);
// }

export const store = createStore(rootReducer, initialState, applyMiddleware(...middleWare));