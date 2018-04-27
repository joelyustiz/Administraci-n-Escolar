import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }from 'redux'
import { socketConnect } from 'socket.io-react';
// import { List as list } from 'immutable'

import AlumnosLayout from '../components/alumnos-layout'
import BotoneraAlumnos from './botonera-alumnos'
import Table from '../../widgets/components/table'
import TableAlumnos from '../../table/components/table-alumnos'
import FormALumnos from '../../form/components/form-alumnos'
import * as actions from '../../actions/index'
import IsLoading from '../../widgets/components/is-loading'



class Alumnos extends Component {
    state = {
        secciones: false,
    }

  
    handleCLickSecciones = event => {
        this.setState({
          secciones:true
        })
      }

      handleSubmit = ( event ) =>{
        event.preventDefault()
        const info = {
            id:event.target.id.value,
            estado:event.target.estado.value,
            nombres: event.target.nombre.value,
            apellidos:event.target.apellidos.value,
            cedula_escolar:event.target.cedulaEscolar.value,
            sexo:event.target.sexo.value,
            fecha_nacimiento:event.target.fechaNaciomiento.value,
            lugar_nacimiento:event.target.lugarDeNacimiento.value,
            nombre_representante:event.target.nombreRepresentante.value,
            cedula_representante:event.target.cedulaRepresentante.value,
            direction:event.target.direccion.value,
            telefono:event.target.telefono.value,
        }
        console.log(info)
        // this.props.actions.isLoading(true)
        this.props.socket.emit('agregarAlumno', info)
      }

      handleClickModificarAlumno = (event) =>{
        
        let res = this.props.alumnos.filter((alumnoId) =>{
            if (alumnoId.id == event.target.innerHTML) {
                return true
            }else{
                return false
            }
            
        })
        this.props.actions.asynAgregarAlumnoForm(res)
      }

    render(){
       
        return(
            <AlumnosLayout>
              <IsLoading isLoading={this.props.isLoading}>
                    {!this.props.visibilityAgregarAlumno &&
                        <BotoneraAlumnos />
                    }
                    {!this.props.visibilityAgregarAlumno &&
                    <TableAlumnos 
                        alumnos={this.props.alumnos}
                        handleClickModificar={this.handleClickModificarAlumno}
                    ></TableAlumnos>
                    }
                    {this.props.visibilityAgregarAlumno  &&
                        <FormALumnos 
                            handleSubmit={this.handleSubmit} 
                        />
                    }
              </IsLoading>
            </AlumnosLayout>
        )
    }
}

function mapStateToProps(state, props) {
    const alumnos = state.get('datos').get('alumno');
    const visibilityAgregarAlumno = state.get('pageAlumnos').get('visibilityAgregarAlumno')
    return{
        alumnos,
        alumnoSelect: state.get('pageAlumnos').get('alumnoId'),
        visibilityAgregarAlumno,
        isLoading: state.get('isLoading').get('active')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        // alumnosActions: bindActionCreators(alumnoActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(socketConnect(Alumnos))