import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './form.css'

class FormAlumnos extends React.Component {
  render() {
    return (
      <div className="FormLayout">
          <Form id="alumnosForm">
          <FormGroup row>
              <Label for="estado" sm={2}>Estado</Label>
              <Col sm={10}>
              <Input type="select" name="estado" id="estado">
                <option>Activo</option>
                <option>Inactivo</option>
               
              </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="nombres" sm={2}>Nombres</Label>
              <Col sm={10}>
                <Input type="text" name="nombres" id="nombres" placeholder="Ingrese los nombres" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="apellidos" sm={2}>Apellidos</Label>
              <Col sm={10}>
                <Input type="text" name="apellidos" id="apellidos" placeholder="Ingrese los Apellidos" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="cedulaEscolar" sm={2}>Cedula Escolar</Label>
              <Col sm={10}>
                <Input type="text" name="cedulaEscolar" id="cedulaEscolar" placeholder="Ingrese la cédula escolar" />
              </Col>
            </FormGroup>


            <FormGroup row>
              <Label for="sexo" sm={2}>Sexo</Label>
              <Col sm={10}>
              <Input type="select" name="sexo" id="exampleSelect">
                <option>M</option>
                <option>F</option>
               
              </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="fechaNaciomiento" sm={2}>Fecha de Nacimiento</Label>
                <Col sm={10}>
               <Input type="date" name="fechaNaciomiento" id="fechaNaciomiento" placeholder="Fecha" />
                </Col>
              </FormGroup>

              <FormGroup row>
              <Label for="lugarDeNacimiento" sm={2}>Lugar de nacimiento</Label>
              <Col sm={10}>
                <Input type="text" name="lugarDeNacimiento" id="lugarDeNacimiento" placeholder="Ubicación" />
              </Col>
            </FormGroup>

             <FormGroup row>
              <Label for="nombreRepresentante" sm={2}>Nombre del representante</Label>
              <Col sm={10}>
                <Input type="text" name="nombreRepresentante" id="nombreRepresentante" placeholder="Nombre completo" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="CedulaRepresentante" sm={2}>Cedula del representante</Label>
              <Col sm={10}>
                <Input type="text" name="CedulaRepresentante" id="CedulaRepresentante" placeholder="Cedula" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Direccion" sm={2}>Dirección</Label>
              <Col sm={10}>
                <Input type="text" name="Direccion" id="Direccion" placeholder="Ubicacion" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Telefono" sm={2}>Telefono</Label>
              <Col sm={10}>
                <Input type="text" name="Telefono" id="Telefono" placeholder="Telefono" />
              </Col>
            </FormGroup>

            <Button onClick={this.props.handleSubmitForm}>Guardar</Button>
            <div></div>
            <Button onClick={this.props.handleSubmitForm}>Cancelar</Button>
          </Form>
      </div>
      
    );
  }
}
export default  FormAlumnos