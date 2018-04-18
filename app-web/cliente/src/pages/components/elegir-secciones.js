'use strict'
import React from 'react'
import { Button } from 'reactstrap';
import './elegir-secciones.css';
import Card from '../../widgets/components/card'
export default function ElegirSecciones(props) {
    return (
        <div className="ElegirSecciones">
            <Card title="Seccion A" subtitle="Profesores:" text="Ejemplo perez">
                <button 
                    className="Button Green"
                    onClick={props.handleCLickSecciones}
                > 
                </button>
            </Card>
           
            <button 
                className="Button Blue"
                onClick={props.handleCLickSecciones}
            > 
                <strong>Seccion:</strong> B  -
                <strong> Alumnos:</strong> 30  
                <strong> Profesor:</strong> Nombre Profesor
            </button>
            <button 
                className="Button Violet"
                onClick={props.handleCLickSecciones}
            > 
                <strong>Seccion:</strong> C  -
                <strong> Alumnos:</strong> 30  
                <strong> Profesor:</strong> Nombre Profesor
            </button>
            <button 
                className="Button Orange"
                onClick={props.handleCLickSecciones}
            > 
                <strong>Seccion:</strong> D  -
                <strong> Alumnos:</strong> 30  
                <strong> Profesor:</strong> Nombre Profesor
            </button>
            <button 
                className="Button Red"
                onClick={props.handleCLickSecciones}
            > 
                <strong>Seccion:</strong> E  -
                <strong> Alumnos:</strong> 30  
                <strong> Profesor:</strong> Nombre Profesor
            </button> 
        </div>
    )
}