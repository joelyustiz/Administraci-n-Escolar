'use strict'

import React from 'react'
import './nav-layout.css'
function NavLayout(props) {
    return(
        <div className="NavLayout">
            {props.children}
        </div>
    )
}

export default NavLayout;