'use strict'
import React from 'react'
import { Button } from 'reactstrap';
import './elegir-secciones.css';
import Card from '../../widgets/components/card'
export default function ElegirSecciones(props) {
    return (
        <div className="ElegirSecciones">
            <Card src="/images/seccion1.jpg" title="Seccion A" subtitle="Profesores:" text="Ejemplo perez">
                <button 
                    className="Button Green"
                    onClick={props.handleCLickSecciones}
                > 
                    Abrir
                </button>
            </Card>
            <Card src="/images/seccion2.jpg" title="Seccion A" subtitle="Profesores:" text="Ejemplo perez">
                <button 
                    className="Button Green"
                    onClick={props.handleCLickSecciones}
                >
                    Abrir 
                </button>
            </Card>
            <Card src="/images/seccion3.jpg" title="Seccion A" subtitle="Profesores:" text="Ejemplo perez">
                <button 
                    className="Button Green"
                    onClick={props.handleCLickSecciones}
                > 
                Abrir
                </button>
            </Card>
            <Card src="/images/seccion4.jpg" title="Seccion A" subtitle="Profesores:" text="Ejemplo perez">
                <button 
                    className="Button Green"
                    onClick={props.handleCLickSecciones}
                > 
                Abrir
                </button>
            </Card>
            <Card src="/images/seccion5.jpg" title="Seccion A" subtitle="Profesores:" text="Ejemplo perez">
                <button 
                    className="Button Green"
                    onClick={props.handleCLickSecciones}
                > 
                Abrir
                </button>
            </Card>   
        </div>
    )
}