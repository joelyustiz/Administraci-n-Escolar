'use strict'
import React from 'react'
import { Table, Button  } from 'reactstrap';
function TableSkeleton(props) {
    return(
        <div className="Table">
             <Table striped bordered responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td><Button color="primary">primary</Button></td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableSkeleton;