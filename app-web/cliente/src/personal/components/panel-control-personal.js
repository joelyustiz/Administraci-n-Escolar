import React from 'react'
import './panel-control-alumnos.css'
import Search from '../containers/search'
// import PanelControlSecciones from './panel-control-secciones';
import ButtonDropdownPersonal from '../containers/button-personal-dropdown'
function PanelControlAlumnos(props) {
    return (
        <div className="BotoneraAlumnos">
            <button className="button blue" onClick={props.handleClick} >Agregar Personal</button>
            <ButtonDropdownPersonal />
            <Search/> 
        </div>
    )
}

export default PanelControlAlumnos;