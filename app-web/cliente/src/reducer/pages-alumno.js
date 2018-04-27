import { fromJS } from 'immutable'
import { 
    OPEN_FORM_ALUMNO,
    CLOSE_ALL_ALUMNO,
    AGREGAR_ALUMNO_FORM
} from '../actions-type/index'

const initialState = fromJS({
        visibilityAgregarAlumno: false,
        alumnoId: null,

})

export default function pageAlumnos(state = initialState, action) {
    switch (action.type) {
        case OPEN_FORM_ALUMNO:
            return state.merge({
                        visibilityAgregarAlumno:true
                    })
            break;

        case CLOSE_ALL_ALUMNO:
            return state.merge({
                visibilityAgregarAlumno:false,
                alumnoId: null
            })
            break;
        case AGREGAR_ALUMNO_FORM:{
            console.log('dispacth')
            console.log(action.payload.state)
            return state.merge({
                alumnoId: action.payload.state
            })
        }

        default:
            return state
            break;
    }
}
