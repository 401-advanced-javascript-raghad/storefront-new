import {combineReducers, createStore } from 'redux';


import { composeWithDevTools } from 'redux-devtools-extension'; 


// import products from './products';
import categories from './Categories';


let reducers = combineReducers({ categories });



const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();