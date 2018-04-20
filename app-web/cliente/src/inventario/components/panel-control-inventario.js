import React from 'react'
import './panel-control-inventario.css'
import Search from '../../widgets/containers/search'

import ButtonDropdownInventario from '../containers/button-dropDown-inventario'
function PanelControlInventario(props) {
    return (
        <div className="BotoneraInventario">
            <button className="button blue" onClick={props.handleClick} >Agregar Alimento</button>
            <ButtonDropdownInventario></ButtonDropdownInventario>
            <Search/> 
        </div>
    )
}

export default PanelControlInventario;