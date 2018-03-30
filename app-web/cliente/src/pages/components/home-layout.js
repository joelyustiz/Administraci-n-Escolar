'use strict'

import React from 'react'

function HomeLayout(props) {
    return(
        <div className="HomeLayout">
            {props.children}
        </div>
    )
}

export default HomeLayout;