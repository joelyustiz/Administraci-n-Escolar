import { fromJS } from 'immutable'
import { OPEN_SECCION, CLOSE_SECCION, SHOW_BOTONERA_ELEGIR_SECCION, HIDE_BOTONERA_ELEGIR_SECCION } from '../actions-type/index'

const initialState = fromJS({
        visibilitySeccion: false,
        visibilityBotoneraSeccion:false,
        seccionId: null,

})

export default function pageSeccion(state = initialState, action) {
    switch (action.type) {
        case OPEN_SECCION:
            return state.merge({
                        visibilitySeccion:true,
                        // seccionId: action.payload.seccionId,
                    })
            break;

        case CLOSE_SECCION:
            return state.set('visibilitySeccion', false)
            break;
        
        case SHOW_BOTONERA_ELEGIR_SECCION:
            return state.set('visibilityBotoneraSeccion', true)
            break;
        case HIDE_BOTONERA_ELEGIR_SECCION:
            return state.set('visibilityBotoneraSeccion', false)
            break;
            
        default:
            return state
            break;
    }
}
