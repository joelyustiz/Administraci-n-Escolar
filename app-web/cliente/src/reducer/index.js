import alumnos from './alumno'
import modal from './modal'
import isLoading from './is-loading'
import pageSecciones from './pages-seccion'
//import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
    alumnos,
    // seccion,
    modal,
    isLoading,
    pageSecciones,
})

export default rootReducer;