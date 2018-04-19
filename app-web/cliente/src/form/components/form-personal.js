import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './form.css'
export default class FormPersonal extends React.Component {
  render() {
    return (
      <div className="FormLayout">
          <Form>
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
              <Label for="cedula" sm={2}>Cedula Escolar</Label>
              <Col sm={10}>
                <Input type="text" name="cedula" id="cedula" placeholder="Ingrese la cédula " />
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
              <Label for="cargo" sm={2}>Cargo</Label>
              <Col sm={10}>
              <Input type="select" name="cargo" id="cargo">
                <option>Directora / Director</option>
                <option>Profesora / Profesor</option>
                <option>Administracón</option>
                <option>Obrero</option>
               
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

            <Button>Guardar</Button>
            <Button>Cancelar</Button>
          </Form>
      </div>
      
    );
  }
}