'use strict'

import React from 'react'

export default function ButtonSeccion(props) {
    return(
        <div className="ButtonSeccion">
             <button 
                className="Button Green"
                onClick={props.handleCLickSecciones}
            > 
                <strong>Seccion:</strong> {props.seccion}  -
                <strong> Alumnos:</strong> {props.alumnos}  
                <strong> Profesor:</strong> {props.profesor}
            </button>
        </div>
    )
}