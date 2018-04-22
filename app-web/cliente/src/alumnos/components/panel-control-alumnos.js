import React from 'react'
import './panel-control-alumnos.css'
import Search from '../containers/search'
// import PanelControlSecciones from './panel-control-secciones';
import ButtonDropdownAlumnos from '../containers/button-dropDown-alumnos'
function PanelControlAlumnos(props) {
    return (
        <div className="BotoneraAlumnos">
            <button className="button blue" onClick={props.handleClickAgregarAlumno} >Agregar Alumno</button>
            <ButtonDropdownAlumnos></ButtonDropdownAlumnos>
            <Search/> 
        </div>
    )
}

export default PanelControlAlumnos;