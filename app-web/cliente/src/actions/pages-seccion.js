import { OPEN_SECCION, CLOSE_SECCION, SHOW_BOTONERA_ELEGIR_SECCION, HIDE_BOTONERA_ELEGIR_SECCION } from '../actions-type/index'

export function openSeccion(seccionId) {
    return {
        type: OPEN_SECCION,
        payload:{
             seccionId   
        }
}
}

export function closeSeccion() {
    return {
        type: CLOSE_SECCION
    }
}

export function showBotonera() {
    return {
        type: SHOW_BOTONERA_ELEGIR_SECCION
    }
}

export function hideBotonera() {
    return {
        type:HIDE_BOTONERA_ELEGIR_SECCION
    }
}
