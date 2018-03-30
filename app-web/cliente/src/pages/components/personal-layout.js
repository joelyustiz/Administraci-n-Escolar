'use strict'

import React from 'react'

function PersonalLayout(props) {
    return(
        <div className="PersonalLayout">
            {props.children}
        </div>
    )
}

export default PersonalLayout;