import datos from './alumno'
import modal from './modal'
import isLoading from './is-loading'
import pageSecciones from './pages-seccion'
import pageAlumnos from './pages-alumno'
//import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
    datos,
    // seccion,
    modal,
    isLoading,
    pageSecciones,
    pageAlumnos
})

export default rootReducer;