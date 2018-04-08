'use strict'

import React from 'react'
import './nav-layout.css'
//componenst
import IconMenu from '../../icons/components/menu'
function Menu(props) {
    return(
        <div className="NavLayout">
            <button onClick={props.handleClick}>
                 <IconMenu size={25} color="white"/>
            </button>
           
            {props.children}
        </div>
    )
}

export default Menu;