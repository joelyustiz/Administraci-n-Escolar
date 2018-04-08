import alumnos from './alumno'
import modal from './modal'
import isLoading from './is-loading'
//import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
    alumnos,
    // seccion,
    modal,
    isLoading,
})

export default rootReducer;