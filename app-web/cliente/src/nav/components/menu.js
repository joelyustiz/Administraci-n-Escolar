'use strict'

import React from 'react'
import './nav-layout.css'
//componenst
import IconMenu from '../../icons/components/menu'
function Menu(props) {
    return(
        <div className="NavLayout">
            <div className="Menu">
                <div className="ButtonMenu">
                    <button onClick={props.handleClick}>
                        <IconMenu size={25} color="white"/>
                    </button>
                </div>
                <div className="TitleMenu">
                    <h6>Administración</h6>
                </div>
            </div>
            
           
            {props.children}
        </div>
    )
}

export default Menu;