import { fromJS } from 'immutable'
import { 
    OPEN_SECCION, 
    CLOSE_SECCION,
    SHOW_BOTONERA_ELEGIR_SECCION,
    HIDE_BOTONERA_ELEGIR_SECCION,
    SHOW_SECCION_ELEGITY,
    HIDE_SECCION_ELEGITY
} from '../actions-type/index'

const initialState = fromJS({
        visibilitySeccion: false,
        visibilityBotoneraSeccion:false,
        seccionId: null,
        seccionElegida: false,

})

export default function pageSeccion(state = initialState, action) {
    switch (action.type) {
        case OPEN_SECCION:
            return state.merge({
                        visibilitySeccion:true,
                        seccionElegida:true
                        // seccionId: action.payload.seccionId,
                    })
            break;

        case CLOSE_SECCION:
            return state.merge({
                visibilitySeccion:false,
                seccionElegida:false
            })
            break;
        
        case SHOW_BOTONERA_ELEGIR_SECCION:
            return state.set('visibilityBotoneraSeccion', true)
            break;
        case HIDE_BOTONERA_ELEGIR_SECCION:
            return state.set('visibilityBotoneraSeccion', false)
            break;
        case SHOW_SECCION_ELEGITY:
            return state.set('seccionElegida', true)
            break;
        case HIDE_SECCION_ELEGITY:
            return state.set('seccionElegida', false)
            break;
        default:
            return state
            break;
    }
}
