import { fromJS } from 'immutable'
import { 
    OPEN_FORM_ALUMNO,
    CLOSE_ALL_ALUMNO
} from '../actions-type/index'

const initialState = fromJS({
        visibilityAgregarAlumno: false,
        alumnoId: null,

})

export default function pageAlumnos(state = initialState, action) {
    switch (action.type) {
        case OPEN_FORM_ALUMNO:
            return state.merge({
                        visibilityAgregarAlumno:true,
                        alumnoId: action.payload.alumnoId
                    })
            break;

        case CLOSE_ALL_ALUMNO:
            return state.merge({
                visibilityAgregarAlumno:false,
                alumnoId: null
            })
            break;

        default:
            return state
            break;
    }
}
