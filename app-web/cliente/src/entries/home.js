import React from 'react'
import { render } from 'react-dom'
// import Home from '../pages/containers/home'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducer/index'
// import data from '../schemas/index'
import { Map as map }   from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {  BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from '../app/containers/routes'
import request from 'axios'
import a from 'awaiting'

const app = document.getElementById('home-container')


const store = createStore(
    reducer,
    map(),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(
            applyMiddleware(thunk)
        )
)


render( 
    <Provider store={store}>
         <Router>
             <AppRoutes />
         </Router>
    </Provider>
     , app);
