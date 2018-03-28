import React from 'react'
import { render } from 'react-dom'
// import Playlist from './src/playlist/components/playlist'
//import data from '../api.json'
import AppRoutes from '../routes/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import reducer from '../reducer/index'
// import data from '../schemas/index'
import { Map as map }   from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom';

const logger = ({getState, dispatch}) => next => action => {
    console.log('Vamos',action)
            const value = next(action)
            console.log('Nuevo Estado', getState().toJS())
            return value
}

const app = document.getElementById('home-container')

const store = createStore(
    (state) => state ,
    map(),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(
            applyMiddleware(logger, thunk)
        )
)

// console.log(store.getState())

render( 
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>,
     app);
