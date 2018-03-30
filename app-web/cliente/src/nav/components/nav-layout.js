'use strict'

import React from 'react'

function NavLayout(props) {
    return(
        <div className="NavLayout">
            {props.children}
        </div>
    )
}

export default NavLayout;