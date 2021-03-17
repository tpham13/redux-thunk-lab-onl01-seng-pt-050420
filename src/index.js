import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import catsReducer from './reducers/catsReducer.js'
 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
