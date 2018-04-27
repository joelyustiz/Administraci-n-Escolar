import { 
    OPEN_MODAL,
    CLOSE_MODAL, 
    SEARCH_ENTITIES, 
    SEARCH_ASYNC_ENTITIES, 
    IS_LOADING, 
    ADD_TODO,
    ACT_TODO,
    OPEN_SECCION,
    CLOSE_SECCION, 
    SHOW_BOTONERA_ELEGIR_SECCION, 
    HIDE_BOTONERA_ELEGIR_SECCION,
    SHOW_SECCION_ELEGITY,
    HIDE_SECCION_ELEGITY,
    OPEN_FORM_ALUMNO,
    CLOSE_ALL_ALUMNO,
    CLR_ESTADO,
    AGREGAR_ALUMNO_FORM
} from '../actions-type/index'

// ---------------------------------------- ESTADOS GENERALES -------------------------------
export function actualizarTodo(state) {
    return {
        type: ACT_TODO,
        payload:{
             state   
        }
}
}

export function ClearEstado() {
    return {
        type: CLR_ESTADO
    }
}
export function AsynActualizarEstado(state) {
    return (dispatch) =>{
        //fetch().then(()=>{}) o otra libreria de peticiones 
            dispatch(ClearEstado()) 
           
            setTimeout(()=>{
                dispatch(addTodo(state)) 
                dispatch(closeAll())
            }, 0)
            
    }
}


export function openModal(mediaId) {
    return {
        type: OPEN_MODAL,
        payload:{
             mediaId   
        }
}
}

export function closeModal() {
    return {
        type: CLOSE_MODAL,
    }
}

export function searchEntities(query) {
    return {
        type: SEARCH_ENTITIES,
        payload:{
            query
        }
    }
}

export function isLoading(value) {
    return {
        type: IS_LOADING,
        payload:{
            value
        }
    }
}
export function searchAsyncEntities(query) {
    return (dispatch) =>{
        //fetch().then(()=>{}) o otra libreria de peticiones
            dispatch(isLoading(true))
        setTimeout(()=>{
            dispatch(isLoading(false))
            dispatch(searchEntities(query))
        },5000)
        
    }
}

export function addTodo(state) {
    return {
        type: ADD_TODO,
        payload:{
            state
        }
    }
}

// -------------------------------Alumnos ---------------------
export function AgregarAlumnoForm(state) {
    return {
        type: AGREGAR_ALUMNO_FORM,
        payload: {state}
    }
}
export function asynAgregarAlumnoForm(state) {
    return (dispatch) =>{
        dispatch(AgregarAlumnoForm(state))
        dispatch(openAgregarAlumno())
    }
}
export function openAgregarAlumno() {
     return {
         type: OPEN_FORM_ALUMNO,
 }
 }
 
 export function closeAll() {
     return {
         type: CLOSE_ALL_ALUMNO
     }
 }


//  --------------------------- SECCIONES ----------------------------------

export function openSeccion(seccionId) {
    console.log(seccionId)
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
export function hideBotoneraSeccion(){
    return {
        type: HIDE_SECCION_ELEGITY
    }
}

export function showBotoneraSeccion(){
    return {
        type: SHOW_SECCION_ELEGITY
    }
}


