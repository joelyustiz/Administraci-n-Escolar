import React from 'react'
// import './panel-control-secciones.css'
import Search from '../../widgets/containers/search'
function SeccionButton(props) {
    return (
        <div className="SeccionButton">
            
            <button className="button blue" onClick={props.handleClick} >Agregar Alumno</button>
            <button className="button blue" onClick={props.handleClick} >Agrgar Docente</button>
            <button className="button blue" onClick={props.handleClick} >Asistencia</button>
            <Search/> 
        </div>
    )
}

export default SeccionButton;