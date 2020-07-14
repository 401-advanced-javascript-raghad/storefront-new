import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension'; 


import cart from './Cart';
import categories from './Categories';


let reducers = combineReducers({ categories , cart});



const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();