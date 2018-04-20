'use strict'
import React from 'react'
import './botonera-layout.css'
export default function BotoneraInventarioLayout(props) {
    return (
        <div className="Botonera">
            {props.children}
        </div>
    )
}