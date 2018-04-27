// import schema from '../schemas/index'
import { fromJS } from 'immutable'
import { 
    ADD_TODO, 
    ACT_TODO,
    CLR_ESTADO
} from '../actions-type/index'

const initialState = fromJS({
            alumno: [],
            seccion:[],
            search:'',
            personal:[],
            inventario:[], 
})

function Datos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return state.set('alumno', action.payload.state.alumno)
        }
            break;
        case ACT_TODO: {
            return state.merge({
                'alumno':action.payload.state.alumno,
                'seccion':action.payload.state.seccion
            })
        }

        case CLR_ESTADO:{
            return state.merge({
                'alumno': [],
                'seccion':[],
                'personal':[],
                'inventario':[], 
            })
        }

        default:
            return state
            break;
    }
}
export default Datos;