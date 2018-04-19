'use strict'
import React from 'react'
import { Table, Button  } from 'reactstrap';
import './table.css'
function TableSkeletonSeccion(props) {
    let contador
    return(
        <div className="TableModel">
             <Table size="sm" striped bordered responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Cedula Escolar</th>
                    <th>Apellidos</th>
                    <th>Nombres</th>
                    <th>Sexo</th>
                    <th>Edad</th>
                    <th>Fecha De nacimiento</th>
                    <th>Lugar de nacimiento</th>
                    <th>Nombre del Representante</th>
                    <th>Cédula del Representante</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                </tr>
                </thead>
                <tbody>
                {
                    
                                   
                    props.alumnos.map((alumnoId) =>{
                        let contador 
                        return <tr key={alumnoId.id}>
                                    <th scope="row">#</th>
                                    <td>{alumnoId.cedula_escolar}</td>
                                    <td>{alumnoId.apellidos}</td>
                                    <td>{alumnoId.nombres}</td>
                                    <td>{alumnoId.sexo}</td>
                                    <td>{alumnoId.edad}</td>
                                    <td>{alumnoId.fecha_nacimiento}</td>
                                    <td>{alumnoId.lugar_nacimiento}</td>
                                    <td>{alumnoId.nombre_representante}</td>
                                    <td>{alumnoId.cedula_representante}</td>
                                    <td>{alumnoId.direction}</td>
                                    <td>{alumnoId.telefono}</td>
                                </tr>
                                
                    })
                }
                
                </tbody>
            </Table>
        </div>
    )
}

export default TableSkeletonSeccion;