import React from 'react'
import './panel-control-alumnos.css'
import Search from '../containers/search'
import PanelControlSecciones from './panel-control-secciones';
function PanelControlAlumnos(props) {
    return (
        <div className="BotoneraAlumnos">
            <button className="button blue" onClick={props.handleClick} >Agregar Alumno</button>
            <button className="button blue" onClick={props.handleClick} >Mostrar Alumnos Activos</button>
            <Search/> 
        </div>
    )
}

export default PanelControlAlumnos;