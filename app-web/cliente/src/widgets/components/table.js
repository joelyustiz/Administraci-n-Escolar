'use strict'
import React from 'react'
import { Table, Button  } from 'reactstrap';
import './table.css'
function TableSkeleton(props) {
    return(
        <div className="TableModel">
             <Table size="sm" striped bordered responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Sexo</th>
                    <th>Edad</th>
                    <th>Fecha De nacimiento</th>
                    <th>Lugar de nacimiento</th>
                    <th>Cargo</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
               
                
                </tbody>
            </Table>
        </div>
    )
}

export default TableSkeleton;