import React from 'react'
import './panel-control-secciones.css'
import Search from '../containers/search'
function PanelControlSecciones(props) {
    return (
        <div className="BotoneraSeccion">
            
            <button className="button blue" onClick={props.handleClick} >Agregar Sección</button>
            <button className="button blue" onClick={props.handleClick} >Modificar Seccion</button>
            <Search/> 
        </div>
    )
}

export default PanelControlSecciones;