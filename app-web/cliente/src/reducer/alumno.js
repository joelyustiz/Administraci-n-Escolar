// import schema from '../schemas/index'
import { fromJS } from 'immutable'
import { ADD_TODO } from '../actions-type/index'

const initialState = fromJS({
            alumno: [],
            seccion:"VACIO",
            search:'', 
})

function Alumno(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return state.set('alumno', action.payload.state.alumno)
        }
            break;
    
        default:
            return state
            break;
    }
}
export default Alumno;