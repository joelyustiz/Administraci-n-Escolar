import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux'
import './form.css'

class FormAlumnos extends React.Component {
  
  render() {
    
    return (
      <div className="FormLayout">
          <Form id="alumnosForm" onSubmit={this.props.handleSubmit}>
          <FormGroup row>
              <Col sm={10}>
                <Input 
                  defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('id') : null} 
                  type="text" name="id" id="id" 
                  placeholder="" 
                  disabled
                  hidden
                />
              </Col>
            </FormGroup>

          <FormGroup row>
              <Label for="estado" sm={2}>Estado</Label>
              <Col sm={10}>
              <Input 
                defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('estado') : ''} 
                type="select" 
                name="estado" 
                id="estado"
              >
                <option>Activo</option>
                <option>Inactivo</option>
               
              </Input>
              </Col>
            </FormGroup>

            

            <FormGroup row>
              <Label for="nombres" sm={2}>Nombres</Label>
              <Col sm={10}>
                <Input 
                  defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('nombres') : ''} 
                  type="text" name="nombre" id="nombres" 
                  placeholder="Ingrese los nombres" 
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="apellidos" sm={2}>Apellidos</Label>
              <Col sm={10}>
                <Input 
                    defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('apellidos') : ''} 
                    type="text" 
                    name="apellidos" 
                    id="apellidos" 
                    placeholder="Ingrese los Apellidos" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="cedulaEscolar" sm={2}>Cedula Escolar</Label>
              <Col sm={10}>
                <Input  
                  defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('cedula_escolar') : ''} 
                  type="text" 
                  name="cedulaEscolar" 
                  id="cedulaEscolar" 
                  placeholder="Ingrese la cédula escolar"
                 />
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
               <Input 
                  defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('fecha_nacimiento') : ''} 
                  type="date" 
                  name="fechaNaciomiento" 
                  id="fechaNaciomiento" 
                  placeholder="Fecha" 
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
              <Label for="lugarDeNacimiento" sm={2}>Lugar de nacimiento</Label>
              <Col sm={10}>
                <Input 
                  defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('lugar_nacimiento') : ''} 
                  type="text" 
                  name="lugarDeNacimiento" 
                  id="lugarDeNacimiento" 
                  placeholder="Ubicación" 
              />
              </Col>
            </FormGroup>

             <FormGroup row>
              <Label for="nombreRepresentante" sm={2}>Nombre del representante</Label>
              <Col sm={10}>
                <Input 
                    defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('nombre_representante') : ''} 
                    type="text" 
                    name="nombreRepresentante" 
                    id="nombreRepresentante" 
                    placeholder="Nombre completo" 
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="cedulaRepresentante" sm={2}>Cedula del representante</Label>
              <Col sm={10}>
                <Input 
                    defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('cedula_representante') : ''} 
                    type="text" 
                    name="cedulaRepresentante" 
                    id="cedulaRepresentante" 
                    placeholder="Cedula" 
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="direccion" sm={2}>Dirección</Label>
              <Col sm={10}>
                <Input 
                    defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('direction') : ''} 
                    type="text" 
                    name="direccion" 
                    id="direccion" 
                    placeholder="Ubicacion" 
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="telefono" sm={2}>Telefono</Label>
              <Col sm={10}>
                <Input 
                    defaultValue={this.props.alumnoSelect ? this.props.alumnoSelect.get(0).get('telefono') : ''} 
                    type="text" 
                    name="telefono" 
                    id="telefono" 
                    placeholder="Telefono" 
                />
              </Col>
            </FormGroup>

            <Button type="submit">Guardar</Button>
            <div></div>
            <Button onClick={this.props.handleSubmitForm}>Cancelar</Button>
          </Form>
      </div>
      
    );
  }
}

function mapStateToProps(state, props) {

  return{
      alumnoSelect: state.get('pageAlumnos').get('alumnoId'),
  }
}

export default connect(mapStateToProps)(FormAlumnos)