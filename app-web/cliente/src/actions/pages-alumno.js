import { 
   OPEN_FORM_ALUMNO,
   CLOSE_ALL_ALUMNO
} from '../actions-type/index'

export function openAgregarAlumno(alumnoId) {
    return {
        type: OPEN_FORM_ALUMNO,
        payload:{
             alumnoId   
        }
}
}

export function closeAll() {
    return {
        type: CLOSE_ALL_ALUMNO
    }
}
